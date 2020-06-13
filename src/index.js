import Chart from "chart.js";
import selectionSort from "./selection";
import insetionSort from "./insertion";
import bubbleSort from "./bubble";
import mergeSort from "./merge";
import quickSort from "./quick";
import randomize from "./randomize";

const ctx = document.querySelector("#myChart");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [],
      },
    ],
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

function addData(chart, data) {
  chart.data.datasets.map((dataset) => {
    chart.data.labels = dataset.data;
    dataset.data.push(data);
  });

  chart.update();
}

function updateData(chart, arr, label = "") {
  chart.data.datasets.map((dataset) => {
    dataset.label = label;
    dataset.data = arr;
  });
  chart.data.labels = arr;
  chart.update();
}

export function visua(chart, arr, label = "") {
  chart.data.datasets.map((dataset) => {
    dataset.label = label;
    dataset.data = arr;
  });
  chart.data.labels = arr;
  chart.update();
}

export function multipleVisua(chart, arr) {
  let collector = [];
  chart.data.datasets.map(({ data }) => collector.push(...data));

  if (arr.length <= 1) return;

  console.log(arr, collector);
}

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.querySelector("#add").addEventListener("click", () => {
  const data = Math.floor(Math.random() * 1000) + 1;
  addData(chart, data);
});

document.querySelector("#add50").addEventListener("click", () => {
  for (let i = 0; i <= 50; i++) {
    const data = Math.floor(Math.random() * 1000) + 1;
    addData(chart, data);
  }
});

document.querySelector("#random").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  const random = randomize(arr);
  updateData(chart, random);
});

document.querySelector("#bubble").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  bubbleSort(arr);
});

document.querySelector("#selection").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  selectionSort(arr);
});

document.querySelector("#insertion").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  insetionSort(arr);
});

document.querySelector("#merge").addEventListener("click", () => {
  let arr = [];
  chart.data.datasets.map(({ data }) => arr.push(...data));
  mergeSort(arr);
});

document.querySelector("#quick").addEventListener("click", () => {
  let arr = [];

  chart.data.datasets.map(({ data }) => arr.push(...data));
  quickSort(arr);
});

export default chart;
