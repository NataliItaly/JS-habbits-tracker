'use strict';
import data from '../data/demo.json'  with { type: 'json' };
import { HABBIT_KEY } from './variables/habbitKey.js';
import {page} from './variables/page.js';
import { activeID } from './variables/activeId.js';
import { habbits } from './variables/habbits.js';
import loadData from './utils/loadData.js';
import saveData from './utils/saveData.js';
import renderNullContent from './render/renderNullContent.js';
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
    if(!localStorage.getItem(HABBIT_KEY)) {
      saveData(data);
    }
    habbits.habbitsArr = loadData(habbits);

    if (habbits.habbitsArr.length === 0) {
      const nullContent = renderNullContent();
      page.content.append(nullContent);
    }
    else {
      const hashId = Number(document.location.hash.replace('#', ''));
      console.log('hash', hashId)
      const urlHabbit = habbits.habbitsArr.find(habbit => habbit.id === hashId);
      console.log('urlHabbit ', urlHabbit)
      if (urlHabbit) {
        console.log(urlHabbit)
        activeID.id = urlHabbit.id;
        rerender(activeID.id);
      }
      else {
        rerender(habbits.habbitsArr[0].id)
      }
    }
  });


page.main.main.addEventListener('click', (e) => {
  if (e.target.matches('.day__comment-delete')) {
    const index = getEventTargetIndex(e);
    setComment(index, '');
  }
  if (e.target.matches('.day__comment-edit')) {
    const currentDay = getCurrentDay(e)
    const currentDayIndex = getEventTargetIndex(e);
    const dayContent = currentDay.querySelector('.day__content');
    console.log(activeID.id)
    const inputPlaceholder = activeHabbit(activeID.id).days[currentDayIndex].comment
    const form = renderForm(inputPlaceholder, inputPlaceholder);

    dayContent.querySelector('.day__comment').remove()
    dayContent.append(form)
  }

  if (e.target.matches('.habbit__skip-comment')) {
    const form = e.target.closest('form');
    form.addEventListener('reset', function() {
    });
    rerender(activeID.id);
  }

  if (e.target.matches('.day__delete-btn')) {
    toggleDayPopup(e)
  }

  if (e.target.matches('.day__popup-btn')) {
    const index = getEventTargetIndex(e);
    const currentDay = getCurrentDay(e);
    currentDay.remove();
    habbits.habbitsArr = habbits.habbitsArr.map((habbit, i) => {
      // activeID.id starts from 1 !!!!!
      if (i === (activeID.id - 1)) {
        const filteredDays = habbit.days.filter((day, ind) => ind !== index );
        return  {...habbit, days: [...filteredDays]}
      }
      else {
        return habbit
      }
    })
    saveData(habbits.habbitsArr);
    rerender(activeID.id);
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
  rerender(activeID.id);

  togglePopup();

  resetForm(e.target, ['name', 'icon', 'target'])
})


