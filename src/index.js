import chart, { addData, updateData } from "./chart";
import selectionSort from "./selection";
import insetionSort from "./insertion";
import bubbleSort from "./bubble";
import mergeSort from "./merge";
import quickSort from "./quick";
import radixSort from "./radix";
import randomize from "./randomize";

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function retrieveData(chart) {
  let collector = [];
  chart.data.datasets.map(({ data }) => collector.push(...data));
  return collector;
}

document.querySelector("#add").addEventListener("click", () => {
  const data = Math.floor(Math.random() * 1000) + 1;
  addData(chart, data);
});

document.querySelector("#add-5").addEventListener("click", () => {
  for (let i = 0; i <= 5; i++) {
    const data = Math.floor(Math.random() * 1000) + 1;
    addData(chart, data);
  }
});

document.querySelector("#add-50").addEventListener("click", () => {
  for (let i = 0; i <= 50; i++) {
    const data = Math.floor(Math.random() * 1000) + 1;
    addData(chart, data);
  }
});

document.querySelector("#random").addEventListener("click", () => {
  const data = retrieveData(chart);
  const random = randomize(data);
  updateData(chart, random);
});

document.querySelector("#bubble").addEventListener("click", () => {
  const data = retrieveData(chart);
  bubbleSort(data);
});

document.querySelector("#selection").addEventListener("click", () => {
  const data = retrieveData(chart);
  selectionSort(data);
});

document.querySelector("#insertion").addEventListener("click", () => {
  const data = retrieveData(chart);
  insetionSort(data);
});

document.querySelector("#merge").addEventListener("click", () => {
  const data = retrieveData(chart);
  mergeSort(data, data);
});

document.querySelector("#quick").addEventListener("click", () => {
  const data = retrieveData(chart);
  quickSort(data);
});

document.querySelector("#radix").addEventListener("click", () => {
  const data = retrieveData(chart);
  radixSort(data);
});
