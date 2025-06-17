import { testString } from "./testString.js";
import { renderTbl } from "./render.js";
import { FORM, KEYWORD, randomButton, TBL_DIV, LINES} from "./global.js";

let centoArr = [];
const poemData = [];


const splitString = () => {
  const linesArray = testString.split("\n");
  return linesArray;
};

const createArr = (poemArr, keyword) => {
  poemArr.forEach((element) => {
    if (element.indexOf(keyword) !== -1) {
      centoArr.push(element);
    }
  });
  return centoArr;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const start = (keyword) => {
  createArr(splitString(), keyword);
  shuffleArray(centoArr);
  return centoArr;
};

const storePoemData = (lines, keyword, poem) => {
  poemData.push({
    numLines: lines,
    kword: keyword,
    pArray: poem,
  });
};

FORM.addEventListener("submit", (e) => {
  centoArr = [];
  e.preventDefault();
  start(KEYWORD.value);
  let nLines = parseInt(LINES.value);
  centoArr = centoArr.slice(0, nLines)
  storePoemData(nLines, KEYWORD.value, centoArr);
  renderTbl(poemData);
  FORM.reset();
});

randomButton.addEventListener("click", (e) => {
  centoArr = [];
  e.preventDefault();
  start("");
  let nLines = parseInt(LINES.value);
  centoArr = centoArr.slice(0, nLines);
  storePoemData(nLines, "", centoArr);
  renderTbl(poemData);
  FORM.reset();
});

TBL_DIV.addEventListener("click", (e) => {
  const index = parseInt(e.target.dataset.poemIndex);
  if (index !== undefined) {
    const poemToShuffle = poemData[index];
    shuffleArray(poemToShuffle.pArray);
    renderTbl(poemData);
  }
});