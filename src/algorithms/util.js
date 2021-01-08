export const newStepHistory = (array) => {
  return [
    {
      array: [...array],
      colorGroup1: [],
      colorGroup2: [],
      colorGroup3: [],
      colorGroup4: [],
      sortedArray: [],
    },
  ];
};

export const addToStepHistory = (
  steps,
  array,
  sortedArray = [],
  colorGroup1 = [],
  colorGroup2 = [],
  colorGroup3 = [],
  colorGroup4 = []
) => {
  steps.push({
    array: [...array],
    colorGroup1: [...colorGroup1],
    colorGroup2: [...colorGroup2],
    colorGroup3: [...colorGroup3],
    colorGroup4: [...colorGroup4],
    sortedArray: [...sortedArray],
  });
};

export const lastSorted = (steps) => {
  return steps[steps.length - 1].sortedArray;
};

export const swap = (array, a, b) => {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
};

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

export const setActionNames = (
  colorGroup1,
  colorGroup2,
  colorGroup3,
  colorGroup4
) => {
  return { colorGroup1, colorGroup2, colorGroup3, colorGroup4 };
};
