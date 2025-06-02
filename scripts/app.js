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
      console.log(data)
      saveData(data);
    }
    habbits.habbitsArr = loadData(habbits);

    rerender()
  });

//(() => loadData())();

page.main.main.addEventListener('click', (e) => {
  if (e.target.matches('.day__comment-delete')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.day__comment-edit')) {
    // index of habbit.days!!!
    const index = getEventTargetIndex(e);
    document.querySelectorAll('.day__comment')[index].remove()
    const currentDay = document.querySelectorAll('.day')[index];
    const form = renderForm('Edit your comment');
    currentDay.append(form)
  }

  if (e.target.matches('.day__delete-btn')) {
    const index = getEventTargetIndex(e);
    const currentDay = document.querySelectorAll('.day')[index];
    currentDay.querySelector('.day__popup').classList.add('day__popup_visible')
  }
  if (e.target.matches('.day__popup-btn')) {
    const index = getEventTargetIndex(e);
    console.log(index)
    const currentDay = document.querySelectorAll('.day')[index];
    console.log(currentDay)
    currentDay.remove();
    habbits.habbitsArr = habbits.habbitsArr.map((habbit, i) => {
      if (i === activeID.id) {
        const filteredDays = habbit.days.filter((day, ind) => ind !== index );
        return  {...habbit, days: [...filteredDays]}
      }
      else {
        return habbit
      }
    })

          console.log(habbits.habbitsArr);
          saveData(habbits.habbitsArr);
          rerender();
  }
});





