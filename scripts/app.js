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
import getEventTargetIndex from './utils/getEventTargetIndex.js';
import setComment from './utils/setComment.js';


//let activeID = 0;


window.addEventListener('DOMContentLoaded',()=>{
    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }
    habbits.habbitsArr = loadData(habbits);

    rerender()
  });

//(() => loadData())();

page.main.main.addEventListener('click', (e) => {
  if (e.target.matches('.day__delete')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.day__edit')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    document.querySelectorAll('.day__comment')[index].remove()
    const currentDay = document.querySelectorAll('.day')[index];
    const form = renderForm();
    currentDay.append(form)
  }
});





