/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let maximumArea = 0;

  for (let j = 0; j < height.length; j++) {
    let val1 = height[j];

    for (let i = 0; i < height.length; i++) {
      let val2 = height[i + 1];

      let heightFinal = Math.min(val1, val2);
      let width = i + 1 - j;

      let newArea = heightFinal * width;

      if (newArea > maximumArea) {
        maximumArea = newArea;
      }
    }
  }
  return maximumArea;
};
