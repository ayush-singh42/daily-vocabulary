let currentIndex = 0;
let wordData = [];

fetch("words.json")
  .then(res => res.json())
  .then(data => {
    wordData = data;
    showWord();
  });

function showWord() {
  const wordObj = wordData[currentIndex];
  document.getElementById("word").textContent = wordObj.word;
  document.getElementById("hindi-meanings").textContent = wordObj.hindi.join(", ");
  document.getElementById("english-meanings").textContent = wordObj.english.join(", ");
  document.getElementById("pronunciation").textContent = wordObj.pronunciation;

  const sentenceList = document.getElementById("sentence-list");
  sentenceList.innerHTML = "";
  wordObj.sentences.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.en} – ${s.hi}`;
    sentenceList.appendChild(li);
  });

  document.getElementById("tip").textContent = wordObj.tip;
}

function prevWord() {
  if (currentIndex > 0) currentIndex--;
  showWord();
}
function nextWord() {
  if (currentIndex < wordData.length - 1) currentIndex++;
  showWord();
}
