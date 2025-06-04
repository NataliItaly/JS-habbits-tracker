import getEventTargetIndex from './getEventTargetIndex.js';
//import { page } from '../variables/page.js';

export default function getCurrentDay(e) {
  const index = getEventTargetIndex(e);
  const currentDay = document.querySelectorAll('.day')[index];
  return currentDay;
}
