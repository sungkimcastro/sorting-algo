import chart, { visua } from "./chart";
import { sleep } from "./index";

export default async function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let prevVal = arr[i];
        arr[i] = arr[j];
        arr[j] = prevVal;
        await sleep(100);
        await visua(chart, arr, "Selection sort");
      }
    }
  }
  return arr;
}
