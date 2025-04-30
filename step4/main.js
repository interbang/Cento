import { testString } from "./testString.js";
const FORM = document.getElementById("form");
let centoArr = [];
const btnShuffle = document.getElementById("shuffle");
const KEYWORD = document.getElementById("keyword");
const GREETING = document.getElementById("greeting");
const NAME = document.getElementById("name");
const poemData = [];
const TBL = document.getElementById("table");

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

const validateField = (event) => {
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

NAME.addEventListener("blur", validateField);

const renderBody = (data) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  data.forEach((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key === "firName") {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<span id="greeting">Greetings ${value}. Here is your poem:</span>`;
        tr.appendChild(td);
        tbody.appendChild(tr);
        const tdSpace = document.createElement("td");
        tdSpace.innerHTML = `<p>&nbsp;</p>`;
        tr.appendChild(tdSpace);
        tbody.appendChild(tr);
      }

      if (key === "kword") {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<b>${value}</b>`;
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
      if (key === "pArray") {
        for (let k = 0; k < 20; k++) {
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.textContent = value[k];
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
    }
  });
  table.appendChild(tbody);
  return table;
};

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderBody(data);
    TBL.appendChild(table);
  }
};

FORM.addEventListener("submit", (e) => {
  centoArr = [];
  e.preventDefault();
  start(KEYWORD.value);
  storePoemData(NAME.value, KEYWORD.value, centoArr);
  renderTbl(poemData);
  FORM.reset();
});

