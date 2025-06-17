import { testString } from "./testString.js";
import { renderTbl } from "./render.js";
import { FORM, KEYWORD, randomButton, TBL_DIV, LINES, playSelect} from "./global.js";

let centoPoem = [];
const poemData = [];

const shakesLines = async (code) => {
    const url=`https://www.folgerdigitaltexts.org/${code}/text`;
    const response = await fetch(url);
    const data = await response.text();
    const shakesArray = data.split("\n");
    const cleanShakes = shakesArray.map(function (line) {
      return line.replace("<br/>", "");
    });
    return cleanShakes;
  }

const splitString = () => {
  const interSplit = testString.split("\n");
  return interSplit;
};

const createArr = (poemArr, keyword) => {
  const lowerKey = keyword.toLowerCase();
  const kpoemArr = poemArr.filter(element => element.toLowerCase().includes(lowerKey));
  return kpoemArr;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const start = async (keyword, code) => {
  const myPoetry = splitString();
  const interbang = createArr(splitString(), keyword);
  const sInter = shuffleArray(interbang);
 
  if (code) {
    const shakesP = await shakesLines(code);
    const shakes = createArr(shakesP, keyword);
    const shortShakes = shakes.slice(0, interbang.length);
    const sShakes = shuffleArray(shortShakes);
    centoPoem = sInter.concat(sShakes);

  } else {
    centoPoem = sInter;  
  }
 
  shuffleArray(centoPoem);
  return centoPoem;
};

const storePoemData = (lines, keyword, poem) => {
  poemData.push({
    numLines: lines,
    kword: keyword,
    pArray: poem,
  });
};

FORM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const playCode = playSelect.options[playSelect.selectedIndex].id;
  centoPoem = await start(KEYWORD.value, playCode);
  let nLines = parseInt(LINES.value);
  const maxStart = centoPoem.length - nLines;
  const maxIndex = Math.floor(Math.random() * (maxStart + 1));
  centoPoem = centoPoem.slice(maxIndex, maxIndex + nLines);
  storePoemData(nLines, KEYWORD.value, centoPoem);
  renderTbl(poemData);
  FORM.reset();
});

randomButton.addEventListener("click", async (e) => {
  e.preventDefault();
  centoPoem = await start("", "Ham");
  let nLines = parseInt(LINES.value);
  const maxStart = centoPoem.length - nLines;
  const maxIndex = Math.floor(Math.random() * (maxStart + 1));
  centoPoem = centoPoem.slice(maxIndex, maxIndex + nLines);
  storePoemData(nLines, "", centoPoem);
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