const { performance } = require("perf_hooks");

function logPerf(func, name) {
  const t0 = performance.now();
  console.log(func);
  const t1 = performance.now();
  console.log(
    `The Call${name ? ` of ${name} ` : " "}took ${t1 - t0} milliseconds.`
  );
}

module.exports = logPerf;
