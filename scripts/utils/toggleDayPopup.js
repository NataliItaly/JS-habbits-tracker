import getEventTargetIndex from './getEventTargetIndex.js';

export default function toggleDayPopup(e) {
  const index = getEventTargetIndex(e);
  const currentDay = document.querySelectorAll('.day')[index];
  currentDay
    .querySelector('.day__popup')
    .classList.toggle('day__popup_visible');
}
