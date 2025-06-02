import getEventTargetIndex from './getEventTargetIndex.js';

export default function getCurrentDay(e) {
  const index = getEventTargetIndex(e);
  const currentDay = document.querySelectorAll('.day')[index];
  return currentDay;
}
