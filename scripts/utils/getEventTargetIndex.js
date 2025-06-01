import { page } from '../variables/page.js';

export default function getEventTargetIndex(e) {
  return Array.from(page.main.main.children).indexOf(e.target.closest('.day'));
}
