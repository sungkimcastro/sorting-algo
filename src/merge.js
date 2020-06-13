import chart, { visua } from "./chart";
import { sleep } from "./index";

export async function sort(arr1, arr2, arrcl) {
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

  await sleep(1000);

  await visua(chart, collector, "Merge sort", arrcl);

  return collector;
}

export default async function mergeSort(arr, clone) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  let left = await mergeSort(arr.slice(0, middle), clone);
  let right = await mergeSort(arr.slice(middle), clone);

  return await sort(left, right, clone);
}
