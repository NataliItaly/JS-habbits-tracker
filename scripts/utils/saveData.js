import { HABBIT_KEY } from '../variables/habbitKey.js';

export default function saveData(value) {
  console.log('value from save', value);
  localStorage.setItem(HABBIT_KEY, JSON.stringify(value));
}
