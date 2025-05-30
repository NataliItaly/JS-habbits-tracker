'use strict';
import data from '../data/demo.json'  with { type: 'json' };

console.log(data);

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')

  }
}
window.addEventListener('DOMContentLoaded',()=>{
  console.log("DOMContentLoaded");
    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }

    loadData()
    rerender(habbits[0].id)
  });

function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  console.log(habbitsString)
  const habbitArr = JSON.parse(habbitsString);

  if (Array.isArray(habbitArr)) {
      habbits = habbitArr;
  }
}

function saveData(value) {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(value));
}

//(() => loadData())();

function rerenderMenu(activeHabbit) {
  if (!activeHabbit) return;

  for (const habbit of habbits) {
    const element = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!element) {
      const newElement = document.createElement('button');
      newElement.setAttribute('menu-habbit-id', habbit.id);
      newElement.classList.add('menu__item');
      newElement.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      newElement.addEventListener('click', () => rerender(habbit.id))
      if (activeHabbit.id === habbit.id) {
        newElement.classList.add('menu__item_active');
      }
      page.menu.append(newElement)
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      element.classList.add('menu__item_active');
    }
    else {
      element.classList.remove('menu__item_active');
    }
  }
}

function renderHead(activeHabbit) {
  if (!activeHabbit) return;
  page.header.h1.innerText = activeHabbit.name
  const progress = activeHabbit.days.length / activeHabbit.target > 1 ? 100 : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressPercent.innerHTML = progress.toFixed(0) + '%'
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
  rerenderMenu(activeHabbit)
  renderHead(activeHabbit)
}


