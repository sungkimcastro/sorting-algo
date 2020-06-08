function pivot(arr, start = 0, end = arr.length + 1) {
  let fistNum = arr[start];
  let pivotIdx = start;

  function swap(arr, i, j) {
    let tempNum = arr[i];
    arr[i] = arr[j];
    arr[j] = tempNum;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (fistNum > arr[i]) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }

  swap(arr, start, pivotIdx);

  return pivotIdx;
}

export default function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
