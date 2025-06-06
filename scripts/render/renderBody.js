import { page } from '../variables/page.js';
import renderForm from './renderForm.js';

export default function renderBody(activeHabbit) {
  activeHabbit.days.forEach((day, i) => {
    const currentDay = document.createElement('div');
    currentDay.classList.add('day');
    const currentDayIndex = document.createElement('div');
    currentDayIndex.classList.add('day__index');
    currentDayIndex.textContent = `Day ${i + 1}`;
    currentDay.append(currentDayIndex);

    const dayContent = document.createElement('div');
    dayContent.classList.add('day__content');
    currentDay.append(dayContent);

    const dayComment =
      day.comment === ''
        ? `<span class="day__comment_null">You don't have a comment here</span>`
        : day.comment;
    const commentBtn =
      day.comment === ''
        ? '<button class="button day__comment-edit day__add"></button>'
        : '<button class="button day__comment-edit day__edit"></button>';

    const deleteCommentBtn =
      day.comment === ''
        ? ''
        : `<button class="button day__comment-delete"></button>`;
    const comment = `
          <div class="day__comment">
            <p class="day__comment-text">${dayComment}</p>
            ${commentBtn}
            ${deleteCommentBtn}
          </div>
        `;

    dayContent.insertAdjacentHTML('afterbegin', comment);

    const deleteDayBtn = document.createElement('button');
    deleteDayBtn.classList.add('day__delete-btn', 'button');
    deleteDayBtn.addEventListener('click', function (e) {});
    currentDay.append(deleteDayBtn);

    const deleteDayPopUp = document.createElement('div');
    deleteDayPopUp.classList.add('day__popup');
    deleteDayPopUp.innerHTML = `
      <p>Are you sure delete day ${i + 1}?</p>
      <button class="day__popup-btn button">Yes, I want delete this day</button>
      <button class="day__popup-close">x</button>
      `;
    deleteDayPopUp.addEventListener('click', function (e) {});
    dayContent.append(deleteDayPopUp);

    page.main.main.append(currentDay);
  });
  const nextDay = document.createElement('div');
  nextDay.classList.add('day', 'day__next');
  const nextDayIndex = document.createElement('div');
  nextDayIndex.classList.add('day__index');
  nextDayIndex.textContent = `Day ${activeHabbit.days.length + 1}`;
  nextDay.append(nextDayIndex);
  nextDay.append(renderForm('Add new day', ''));

  page.main.main.append(nextDay);
}
