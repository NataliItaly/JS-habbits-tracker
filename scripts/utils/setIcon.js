import { page } from '../variables/page.js';

export default function setIcon(e) {
  console.log(e.target.closest('.popup__icon'));
  e.target.closest('.popup__icon').classList.add('icon_active');
}
