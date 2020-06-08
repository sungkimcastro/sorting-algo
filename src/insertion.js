export default function insetionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num;
  }
  return arr;
}
