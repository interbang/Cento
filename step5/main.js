import { testString } from "./testString.js";
import { renderTbl } from "./render.js";
import { FORM, KEYWORD, NAME } from "./global.js";

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
};

const storePoemData = (firstName, keyword, poem) => {
  poemData.push({
    firName: firstName,
    kword: keyword,
    pArray: poem,
  });
};

const validateName = (event) => {
  const field = event.target.value;
  const fieldError = document.getElementById("nameError");

  if (field === "") {
    fieldError.textContent = `Name is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

NAME.addEventListener("blur", validateName);

const validateKeyword = (event) => {
  const field = event.target.value;
  const fieldError = document.getElementById("keywordError");

  if (field === "") {
    fieldError.textContent = `Keyword is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

KEYWORD.addEventListener("blur", validateKeyword);

FORM.addEventListener("submit", (e) => {
  centoArr = [];
  e.preventDefault();
  start(KEYWORD.value);
  storePoemData(NAME.value, KEYWORD.value, centoArr);
  renderTbl(poemData);
  FORM.reset();
  console.log(centoArr[0]);
});
