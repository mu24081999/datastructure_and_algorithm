// 1. Basic Binary Search (Easy)
// Problem: Given a sorted array of integers and a target integer, implement a function that uses the binary search algorithm to determine if the target integer exists in the array. If it does, return its index; otherwise, return -1.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    console.log(`recursion low=${low}, high=${high}`);
    let mid = Math.floor((low + high) / 2);
    console.log(`mid=${mid}, target=${target}`);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // if the target alies in left side of the mid, we will move the low pointer to mid + 1
      low = mid + 1;
    } else {
      // if the target alies in right side of the mid, we will move the high pointer to mid - 1
      high = mid - 1;
    }
  }
  return -1; // Target not found
}
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 13));
// low=0,high=6,mid=3,target=7,low=3+1=4
// low=4,high=6,mid=5,target=7,low=5+1=6
// low=6,high=6,mid=6,target=7,low=6+1=7
// low=7,high=6,mid=6,target=7,low=7+1=8
// low=8,high=6,mid=7,target=7
