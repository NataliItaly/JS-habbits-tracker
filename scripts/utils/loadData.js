import { HABBIT_KEY } from '../variables/habbitKey.js';

export default function loadData(habbits) {
  const habbitsString = localStorage.getItem(HABBIT_KEY);

  const habbitArr = JSON.parse(habbitsString);

  if (Array.isArray(habbitArr)) {
    habbits = habbitArr;
  }
  return habbits;
}
