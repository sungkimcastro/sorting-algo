function sort(arr1, arr2) {
  let collector = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      collector.push(arr2[j]);
      j++;
    } else {
      collector.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    collector.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    collector.push(arr2[j]);
    j++;
  }

  return collector;
}

export default function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return sort(left, right);
}
