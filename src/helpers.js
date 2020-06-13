import chart from "./chart";

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function speedListener({ target: { value } }) {
  const speed = document.querySelector("#speed-label");
  speed.innerHTML = "";
  speed.textContent = `Speed:  ${value / 100} sec`;
  chart.options.speed = value * 10;
}

export function retrieveData(chart) {
  let collector = [];
  chart.data.datasets.map(({ data }) => collector.push(...data));
  return collector;
}
