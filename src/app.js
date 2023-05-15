/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // document.getElementById("excuse").innerHTML = ExqsGenerator();
  document.querySelector("#excuseButton").addEventListener("click", function() {
    document.getElementById("excuse").innerHTML = ExqsGenerator();
  });
};
function ExqsGenerator() {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Lucia"];
  let action = ["ate", "peed", "crushed", "broke", "burned"];
  let what = ["my homework", "the keys", "the car", "my house"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  let randomExcuse =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;

  return randomExcuse;
}
