'use strict';
import data from '../data/demo.json'  with { type: 'json' };
import { HABBIT_KEY } from './variables/habbitKey.js';
import {page} from './variables/page.js';
import { activeID } from './variables/activeId.js';
import { habbits } from './variables/habbits.js';
import loadData from './utils/loadData.js';
import saveData from './utils/saveData.js';
import rerender from './render/rerender.js';
import renderForm from './render/renderForm.js';


//let activeID = 0;


window.addEventListener('DOMContentLoaded',()=>{
    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }
    habbits.habbitsArr = loadData(habbits);

    rerender(habbits.habbitsArr[activeID.id].id)
  });

//(() => loadData())();

page.main.main.addEventListener('click', (e) => {
  if (e.target.matches('.habbit__delete')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.habbit__edit')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    document.querySelectorAll('.habbit__comment')[index].remove()
    const currentHabbit = document.querySelectorAll('.habbit')[index];
    const form = renderForm();
    currentHabbit.append(form)
  }
});

function getEventTargetIndex (e) {
  return Array.from(page.main.main.children).indexOf(e.target.closest('.habbit'));
}

function setComment(index, text) {
  habbits[activeID.id].days[index].comment = text;

  saveData(habbits);
  rerender(activeID);
}



/*function rerender(activeID) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeID.id)
  if (!activeHabbit) return;

  renderMenu(activeHabbit, habbits)
  activeID = activeHabbit.id;
  renderHead(activeHabbit)
  renderBody(activeHabbit)
}*/


