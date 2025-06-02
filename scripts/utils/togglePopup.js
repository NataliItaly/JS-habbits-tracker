import { page } from '../variables/page.js';

export default function togglePopup() {
  page.popup.cover?.classList.toggle('cover_hidden');
}
