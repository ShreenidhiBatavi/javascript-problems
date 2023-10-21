console.log("hare krishna");

let schedule = [
  { id: "a", depedencies: ["c"] },
  { id: "b", depedencies: ["a"] },

  { id: "c", depedencies: [] },
  { id: "d", depedencies: [] },
  { id: "e", depedencies: [] },
];
// ceabd
let s = []; //cdeab
function executeTask() {
  schedule.forEach((el, i) => {
    if (el.depedencies.length === 0) {
      s.push(el.id);
      schedule = schedule.filter((e) => e.id !== el.id);
    } else if (s.includes(el.depedencies[0])) {
      s.push(el.id);
      //   schedule.splice(i, 1);
      schedule = schedule.filter((e) => e.id !== el.id);
    }
    console.log(schedule, "12");
  });
  while (schedule.length > 0) {
    executeTask();
  }
}
executeTask();
console.log(s, "result");
