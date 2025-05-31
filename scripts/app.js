'use strict';
import data from '../data/demo.json'  with { type: 'json' };



let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let activeID = 0;

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')
  },
  main: {
    main: document.querySelector('main'),
    days: document.querySelector('.days'),
    habbit: {
      day: document.querySelector('.habbit__day'),
      form: document.querySelector('.habbit__form'),
      delete: document.querySelector('.habbit__delete')
    }
  }
}
window.addEventListener('DOMContentLoaded',()=>{

    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }
    loadData()
    //console.log(habbits)
    rerender(habbits[activeID].id)
  });

function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);

  const habbitArr = JSON.parse(habbitsString);

  if (Array.isArray(habbitArr)) {
      habbits = habbitArr;
  }
}

function saveData(value) {
  console.log('value from save', value)
  localStorage.setItem(HABBIT_KEY, JSON.stringify(value));
}

//(() => loadData())();

function renderMenu(activeHabbit) {
  page.main.main.innerHTML = '';

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

  activeID = activeHabbit.id
}

function renderHead(activeHabbit) {
  if (!activeHabbit) return;
  page.header.h1.innerText = activeHabbit.name
  const progress = activeHabbit.days.length / activeHabbit.target > 1 ? 100 : activeHabbit.days.length / activeHabbit.target * 100;
  page.header.progressPercent.innerHTML = `${progress.toFixed(0)}%`
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
}

function renderBody(activeHabbit) {
  activeHabbit.days.forEach((day, i) => {
    const currentHabbit = document.createElement('div');
    currentHabbit.classList.add('habbit');
    const currentDay = document.createElement('div');
    currentDay.classList.add('habbit__day');
    currentDay.textContent = `Day ${i + 1}`;
    currentHabbit.append(currentDay);

    if (day.comment !== "") {
      const comment = (`
          <div class="habbit__comment">
            <p class="habbit__comment-text">${day.comment}</p>
            <button class="button habbit__delete">Delete</button>
          </div>
        `);
      currentHabbit.insertAdjacentHTML('beforeend', comment);
    }
    else {
      const form = (`<form class="habbit__form">
        <input
        name="comment"
        class="input_icon"
        type="text"
        placeholder="Comment"
        />
        <img
        class="input__icon"
        src="./images/comment.svg"
        alt="Comment item"
        />
        <button class="button" type="submit">Done</button>
        </form>`);
        currentHabbit.insertAdjacentHTML('beforeend', form);
      }
    page.main.main.append(currentHabbit);
  });
}

page.main.main.addEventListener('click', (event) => {
  if (event.target.matches('.habbit__delete')) {
    console.log('page children', page.main.main.children)
    console.log('event ', event.target.closest('.habbit'))
    // index of habbit.days!!!
    const index = Array.from(page.main.main.children).indexOf(event.target.closest('.habbit'));
    console.log('index', index)
    console.log('active id ', activeID)
    console.log('habbit of index', habbits[activeID].days[index])

    deleteComment(index);
  }
});

function deleteComment(index) {
  console.log('comment to delete ', habbits[activeID].days[index].comment)
  habbits[activeID].days[index].comment = '';
  console.log('new habbits ', habbits)

  saveData(habbits);
  //console.log('active habbit id', activeHabbit.id)
  rerender(activeID);
}

function rerender(activeID) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeID)
  if (!activeHabbit) return;

  renderMenu(activeHabbit)
  renderHead(activeHabbit)
  renderBody(activeHabbit)
}


