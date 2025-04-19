import { testString } from "./testString.js";
const POEM = document.getElementById("poem");
const poemArr = [];

const linesArray = testString.split('\n');

linesArray.forEach((element) => {
  if (element.indexOf("you") !== -1) {
    // console.log(element);
    poemArr.push(element);
  }
});

// console.log(poemArr);

shuffleArray(poemArr);

for (let i = 0; i < poemArr.length; i++) {
  const newP = document.createElement("p");
  newP.textContent = poemArr[i];
  POEM.appendChild(newP);

}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}



// POEM.textContent = poemArr[0];

// Expected output: [
//     "",
//     "Ache's Fruit",
//     "A.R.Midgley",
//     "",
//     "A few small questions, reservations",
//     "all requiring confirmations.",
//     "When you do, such comes to you",
//     "in many forms, and feelings too",
//     "with no remorse, forget regret -",
//     "I see you every day and yet",
//     "it’s not enough, I want more:"
// ]

