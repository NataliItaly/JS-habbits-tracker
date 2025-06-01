import { page } from '../variables/page.js';
import renderForm from './renderForm.js';

export default function renderBody(activeHabbit) {
  activeHabbit.days.forEach((day, i) => {
    const currentHabbit = document.createElement('div');
    currentHabbit.classList.add('habbit');
    const currentDay = document.createElement('div');
    currentDay.classList.add('habbit__day');
    currentDay.textContent = `Day ${i + 1}`;
    currentHabbit.append(currentDay);

    if (day.comment !== '') {
      const comment = `
          <div class="habbit__comment">
            <p class="habbit__comment-text">${day.comment}</p>
            <button class="button habbit__delete">Delete</button>
            <button class="button habbit__edit">Edit</button>
          </div>
        `;
      currentHabbit.insertAdjacentHTML('beforeend', comment);
    } else {
      const form = renderForm();
      currentHabbit.insertAdjacentElement('beforeend', form);
    }
    page.main.main.append(currentHabbit);
  });
}
