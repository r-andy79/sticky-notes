const formEl = document.querySelector("form");
const containerEl = document.querySelector(".container");
const noteElProto = document.querySelector(".prototype");

const noteEl = noteElProto.cloneNode(true);

console.log(noteEl.hasChildNodes());

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const noteContent = e.target.elements.noteContent.value;
  console.log(title, noteContent);
  createNoteElement(title, noteContent);
});

const createNoteElement = function (title) {
  const noteTitle = document.createElement("h1");
  const noteContent = document.createElement("p");
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteTitle.innerText = title;
  noteContent.innerText = noteContent;
  noteEl.appendChild(noteTitle);
  noteEl.appendChild(noteContent);
  containerEl.appendChild(noteEl);
};
