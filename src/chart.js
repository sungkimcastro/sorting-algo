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
    speed: 1000,
    stop: false,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: "rgba(255,99,132,1)",
        fontSize: 15,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: false,
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

export function addData(chart, data) {
  chart.data.datasets.map((dataset) => {
    chart.data.labels = dataset.data;
    dataset.data.push(data);
  });

  chart.update();
}

export function updateData(chart, arr, label = "") {
  chart.data.datasets.map((dataset) => {
    dataset.label = label;
    dataset.data = arr;
  });
  chart.data.labels = arr;
  chart.update();
}

export function visua(chart, arr, label = "", arrcl = []) {
  if (arrcl.length) {
    if (arr.length < arrcl.length) {
      console.log(arr, arrcl);
    } else {
      chart.data.datasets.map((dataset) => {
        dataset.label = label;
        dataset.data = arr;
      });
      chart.data.labels = arr;
      chart.update();
    }
  } else {
    chart.data.datasets.map((dataset) => {
      dataset.label = label;
      dataset.data = arr;
    });
    chart.data.labels = arr;
    chart.update();
  }
}

export function setStyles(chart, bgc, bc, hbc, fc) {
  chart.data.datasets.map((data) => {
    data.backgroundColor = bgc;
    data.borderColor = bc;
    data.hoverBorderColor = hbc;
  });
  chart.options.legend.labels.fontColor = fc;
  chart.update();
}

export default chart;
