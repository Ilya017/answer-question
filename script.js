let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["Коньки", "Яблоки", "Учебники", "Полотенце"];
function getRandomInt(n) {
  return Math.floor(Math.random() * n)
}
function randomArrayValue(arr, n = 1) {
  let str = "";
  for(let i = 0; i < n; i++) {
    let rand = getRandomInt(arr.length);
    str += arr[rand] + "";
    return str;
  }
}
document.write(randomArrayValue(questions));
document.write(":");
document.write(randomArrayValue(answers,2));