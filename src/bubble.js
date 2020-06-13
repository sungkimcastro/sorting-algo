import chart, { visua } from "./chart";
import { sleep } from "./helpers";

export default async function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        await visua(chart, arr, "Bubble sort");
        await sleep(chart.options.speed);
      }
    }
  }
  return arr;
}
