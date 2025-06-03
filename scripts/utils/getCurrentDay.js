import getEventTargetIndex from './getEventTargetIndex.js';
//import { page } from '../variables/page.js';

export default function getCurrentDay(e) {
  const index = getEventTargetIndex(e);
  //console.log(page.main.habbit.day);
  const currentDay = document.querySelectorAll('.day')[index];
  console.log(currentDay);
  return currentDay;
}
