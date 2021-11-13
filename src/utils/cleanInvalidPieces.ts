export function cleanInvalidPieces (arr: number[][]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (
      arr[i][0] > 8
      || arr[i][0] < 1
      || arr[i][1] > 8
      || arr[i][1] < 1
    ) {
      arr.splice(i, 1);
    };
  };

  return arr;
};