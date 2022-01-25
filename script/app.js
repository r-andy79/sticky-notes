const formEl = document.querySelector("form");
const containerEl = document.querySelector(".container");
const noteElProto = document.querySelector(".prototype");

const noteEl = noteElProto.cloneNode(true);

console.log(noteEl.hasChildNodes());

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const noteContent = e.target.elements.noteContent.value;
  console.log(noteContent);
  createNoteElement(title, noteContent);
});

const createNoteElement = function (title, noteContent) {
  const noteTitleEl = document.createElement("h1");
  const noteContentEl = document.createElement("p");
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteTitleEl.innerText = title;
  noteContentEl.innerText = noteContent;
  noteEl.appendChild(noteTitleEl);
  noteEl.appendChild(noteContentEl);
  containerEl.appendChild(noteEl);
};
