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

    if (day.comment !== '') {
      const comment = `
          <div class="day__comment">
            <p class="day__comment-text">${day.comment}</p>
            <button class="button day__delete">Delete</button>
            <button class="button day__edit">Edit</button>
          </div>
        `;
      currentDay.insertAdjacentHTML('beforeend', comment);
    } else {
      const form = renderForm();
      currentDay.insertAdjacentElement('beforeend', form);
    }
    page.main.main.append(currentDay);
  });
  const nextDay =
}
