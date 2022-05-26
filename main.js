import  { list } from './list.js';

const form = document.getElementById("todo");
const cards = document.getElementById("cards");
const input = form.querySelector("input");

function clickhandler(e) {
  const { target } = e;
  if (target.closest('.submit')) {
    onSubmit(e);
  } else if (target.closest('.button-done')) {
    makeDone(target);
  } else if (target.closest('.button-delete')) {
    deleteItem(target);
  }
}

function onSubmit(e) {
  e.preventDefault();
  if (input.value) {
    createListItem(input.value.trim());
  }
}

function makeDone(target) {
  target.closest('.card')?.querySelector('.text')?.classList.toggle('done')
}

function deleteItem(target) {
  target.closest('.card').remove();
}

function createListItem(item) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<p>
                      <span class="button-delete">&#10060;</span>
                      <span class="button-done">&#10004;</span>                      
                      <span class="text">${item}</span>
                     </p> `

  cards.insertAdjacentElement("beforeend", card);
}

function initList() {
  list.forEach((item) => {
    createListItem(item);
  })
}

document.addEventListener("click", clickhandler);

initList();
