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
import validateForm from './utils/validateForm.js';
import resetForm from './utils/resetForm.js';
import activeHabbit from './variables/activeHabbit.js';


window.addEventListener('DOMContentLoaded',()=>{
  //console.log('loaded')
    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }
    habbits.habbitsArr = loadData(habbits);

    //rerender();
    const hashId = Number(document.location.hash.replace('#', ''));
    //console.log('hash', hashId)
    const urlHabbitId = habbits.habbitsArr.find(habbit => habbit.id === hashId - 1);
    if (urlHabbitId) {
      rerender(urlHabbitId.id)
    }
    else {
      rerender()
    }
  });

(() => {

})()

page.main.main.addEventListener('click', (e) => {
  if (e.target.matches('.day__comment-delete')) {
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.day__comment-edit')) {
    const currentDay = getCurrentDay(e)
    const currentDayIndex = getEventTargetIndex(e);
    const dayContent = currentDay.querySelector('.day__content');
    const inputPlaceholder = activeHabbit().days[currentDayIndex].comment
    const form = renderForm(inputPlaceholder);

    dayContent.querySelector('.day__comment').remove()
    dayContent.append(form)
  }

  if (e.target.matches('.habbit__skip-comment')) {
    const form = e.target.closest('form');
    //console.log(form)
    form.addEventListener('reset', function() {
      console.log('reset');
    });
    rerender();
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

page.popup.form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = validateForm(e.target, ['name', 'icon', 'target'])
  if (!data) {
    return;
  }
  habbits.habbitsArr = [...habbits.habbitsArr, {id: habbits.habbitsArr.length, name: data.name, target: data.target, icon: data.icon, days: []}];
  //console.log(habbits);

  saveData(habbits.habbitsArr);
  rerender();


  togglePopup();

  resetForm(e.target, ['name', 'icon', 'target'])
})


