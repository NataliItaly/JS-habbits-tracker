import { page } from '../variables/page.js';

export default function setIcon(e) {
  e.target.closest('.popup__icon').classList.add('icon_active');
  const iconValue = e.target.closest('.popup__icon').dataset.value;
  page.popup.iconInput.value = iconValue;
}
