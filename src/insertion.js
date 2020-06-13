import chart, { visua } from "./chart";
import { sleep } from "./helpers";

export default async function insetionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;

      arr[j + 1] = num;

      await visua(chart, arr, "Insertion sort");
      await sleep(chart.options.speed);
    }
  }

  return arr;
}
