import chart, { addData, updateData, setStyles } from "./chart";
import selectionSort from "./selection";
import insetionSort from "./insertion";
import bubbleSort from "./bubble";
import mergeSort from "./merge";
import quickSort from "./quick";
import radixSort from "./radix";
import randomize from "./randomize";
import { speedListener, retrieveData } from "./helpers";

document.querySelector("#go-retro").addEventListener("click", () => {
  const bodyClass = document.querySelectorAll(".body")[0];
  const setClass = bodyClass.classList.toggle("go__retro");
  let bgc = "rgba(255,99,132,0.2)",
    bc = "rgba(255,99,132,1)",
    hbc = "rgba(255,99,132,1)",
    fc = "rgba(255,99,132,1)";

  if (setClass) {
    bgc = "rgba(255,99,132,0.4)";
    bc = "#ff00ff";
    hbc = "#ff00ff";
    fc = "#00ff9f";
    setStyles(chart, bgc, bc, hbc, fc);
  } else {
    setStyles(chart, bgc, bc, hbc, fc);
  }
});

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

document
  .querySelector("#speed")
  .addEventListener("onchange", speedListener, false);
document
  .querySelector("#speed")
  .addEventListener("input", speedListener, false);

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
