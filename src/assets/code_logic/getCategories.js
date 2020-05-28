export const getCategories = (array, property) => {
  return array.reduce((array, elem) => {
    if (!array.includes(elem[property])) {
      array.push(elem[property]);
    }
    return array;
  }, []);
};

export const buildCategoryForSelectList = (array) => {
  let resultArray = [];
  array.forEach((elem) =>
    resultArray.push({
      value: elem,
      label: elem,
    })
  );
  return resultArray;
};
