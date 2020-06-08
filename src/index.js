import Chart from "chart.js";
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
    if (!dataset.data.length) {
      dataset.data.push(data);
      chart.data.labels.push(data);
    } else dataset.data.push(data);
  });

  chart.update();
}

function updateData(chart, arr) {
  chart.data.datasets.map((dataset) => {
    dataset.label = "Selection Sort";
    dataset.data = arr;
  });
  chart.data.labels = arr;
  chart.update();
}

document.querySelector("#add").addEventListener("click", () => {
  const data = Math.floor(Math.random() * 1000) + 1;
  addData(chart, data);
});

document.querySelector("#random").addEventListener("click", () => {
  let collector = [];

  for (let i = 0; i <= 50; i++) {
    const data = Math.floor(Math.random() * 1000) + 1;
    collector.push(data);
  }

  updateData(chart, collector);
});

document.querySelector("#selection").addEventListener("click", () => {
  function selectionSort(chart) {
    let arr = [];
    chart.data.datasets.map(({ data }) => arr.push(...data));

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let prevVal = arr[i];
          arr[i] = arr[j];
          arr[j] = prevVal;
          updateData(chart, arr);
        }
      }
    }
  }
  selectionSort(chart);
});
