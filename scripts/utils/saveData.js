import { HABBIT_KEY } from '../variables/habbitKey.js';

export default function saveData(value) {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(value));
}
