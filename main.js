// VARIABLES

const wordElement = document.querySelector(".main__container--inputText");
const btn = document.querySelector(".main__container--btn");
const resultElement = document.querySelector(".main__container--result");

// FUNCTIONS

const countVowels = () => {
  let vowelCount = 0;
  let wordValue = wordElement.value.toLowerCase();

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  resultElement.innerHTML = `${wordElement.value.toUpperCase()} contains ${vowelCount} vowels.`;
};

// EVENT LISTENERS

btn.addEventListener("click", countVowels);
