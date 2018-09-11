import React, { Component } from 'react';
import ColorList from './components/List';
import AddColorForm from './components/Add';
import Sort from './components/Sort';
import data from './lib/data';
import { sortByDate } from './helpers';

export class App extends Component {
  constructor(props) {
    super(props);
    this.addColor = this.addColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.onSortColors = this.onSortColors.bind(this);
    this.state = {
      colors: sortByDate(data),
      order: 'DESC'
    };
  };

  addColor(color) {
    const colors = sortByDate([...this.state.colors, color]);
    this.setState({ colors });
  };

  deleteColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({ colors });
  };

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id === id) ? { ...color, rating } : color
    );

    this.setState({ colors });
  };

  onSortColors(order) {
    const colors = sortByDate(this.state.colors, order);
    this.setState({ colors, order });
  };

  render() {
    const { colors } = this.state;
    return (
      <div className='content'>
        <div className='header'>
                  <AddColorForm onAddColor={this.addColor} />
        <Sort onSort={this.onSortColors} order={this.state.order} />
        </div>

        <ColorList list={colors} onDeleteColor={this.deleteColor} onRateColor={this.rateColor} />
      </div>
    )
  }
}

