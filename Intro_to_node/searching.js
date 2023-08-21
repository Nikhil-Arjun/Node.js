function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return undefined;
}

function binarySearch(arr, x) {
  // some implementation
}
console.log("Ending Searching");
module.exports = {
  linear: linearSearch,
  binary: binarySearch,
};
