import chart, { visua, sleep } from "./index";

async function pivot(arr, start = 0, end = arr.length + 1) {
  let fistNum = arr[start];
  let pivotIdx = start;

  async function swap(arr, i, j) {
    let tempNum = arr[i];
    arr[i] = arr[j];
    arr[j] = tempNum;
    await sleep(100);
    await visua(chart, arr);
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (fistNum > arr[i]) {
      pivotIdx++;
      await sleep(100);
      await swap(arr, i, pivotIdx);
    }
  }
  await sleep(100);
  await swap(arr, start, pivotIdx);

  return pivotIdx;
}

export default async function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = await pivot(arr, left, right);

    await Promise.all([
      quickSort(arr, left, pivotIndex - 1),
      quickSort(arr, pivotIndex + 1, right),
    ]);
  }

  return arr;
}
