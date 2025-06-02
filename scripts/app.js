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
import getCurrentDay from './utils/getCurrentDay.js';
import toggleDayPopup from './utils/toggleDayPopup.js';
import togglePopup from './utils/togglePopup.js';
import setIcon from './utils/setIcon.js';




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
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.day__comment-edit')) {
    const currentDay = getCurrentDay(e);
    currentDay.querySelector('.day__comment').remove()
    const form = renderForm('Edit your comment');
    currentDay.append(form)
  }

  if (e.target.matches('.day__delete-btn')) {
    toggleDayPopup(e)
  }
  if (e.target.matches('.day__popup-btn')) {
    const index = getEventTargetIndex(e);
    const currentDay = getCurrentDay(e);
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
    saveData(habbits.habbitsArr);
    rerender();
  }
  if (e.target.matches('.day__popup-close')) {
    toggleDayPopup(e)
  }
});

page.menu.menuAddBtn.addEventListener('click', function(e) {
    togglePopup()
});

page.popup.close.addEventListener('click', function(e) {
    togglePopup()
});

page.popup.cover.addEventListener('click', function(e) {
  if (e.target.closest('.popup__icon')) {
    page.popup.iconBtns.forEach(btn => btn.classList.remove('icon_active'))
    setIcon(e)
  }
})




