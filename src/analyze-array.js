export function analyzeArray(arr) {
  if (arr.length === 0) return null;

  return {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: arrayMin(arr),
    max: arrayMax(arr),
    length: arr.length,
  };
}

function arrayMin(arr) {
  return arr.reduce(function (p, v) {
    return p < v ? p : v;
  });
}

function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return p > v ? p : v;
  });
}
