const num = [2, 3, 6, 7, 9];
function doBinarySearch(nums, target) {
  let centerIndex = Math.floor(num.length / 2);
  let startIndex = 0;
  const endIndex = target < num[centerIndex] ? 0 : num.length - 1;
  while (startIndex !== centerIndex) {
    if (target === num[centerIndex]) {
      return { i: centerIndex, ele: num[centerIndex] };
    } else if (target < nums[centerIndex]) {
      startIndex = startIndex + 1;
    } else if (target > num[centerIndex]) {
      endIndex--;
    }
  }
  return startIndex;
}
console.log("first");
console.log(doBinarySearch(num, 3));
