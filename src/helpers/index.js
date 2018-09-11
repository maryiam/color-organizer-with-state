export const sortByDate = (items, order = 'DESC') => {
  const sortRule = order === 'DESC' ? -1 : 1;
  return [...items.sort((firstItem, secondItem) =>
    new Date(firstItem.timestamp) > new Date(secondItem.timestamp) ? sortRule : -sortRule
  )];
};
