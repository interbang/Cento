import { testString } from "./testString.js";
const POEM = document.getElementById("poem");
const centoArr = [];


const splitString = () => {
  const linesArray = testString.split('\n');
  return linesArray;
}

const createArr = (poemArr, keyword) => {
poemArr.forEach((element) => {
  if (element.indexOf(keyword) !== -1) {
    centoArr.push(element);
  }
});
return centoArr;
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
const printArr = (array) => {
  for (let i = 0; i < 20; i++) {
    const newP = document.createElement("p");
    newP.textContent = array[i];
    POEM.appendChild(newP);
  }
  }
const start = () => {
const keyword = "the";
createArr(splitString(), keyword);
shuffleArray(centoArr);
printArr(centoArr);
}

start();







