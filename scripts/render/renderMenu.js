import { page } from '../variables/page.js';
import { habbits } from '../variables/habbits.js';
import { activeID } from '../variables/activeId.js';
import rerender from './rerender.js';

export default function renderMenu(activeHabbit) {
  page.main.main.innerHTML = '';

  for (const habbit of habbits.habbitsArr) {
    const element = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!element) {
      const newElement = document.createElement('button');
      newElement.setAttribute('menu-habbit-id', habbit.id);
      newElement.classList.add('menu__item');
      newElement.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      newElement.addEventListener('click', () => {
        activeID.id = habbit.id;
        rerender();
      });
      if (activeHabbit.id === habbit.id) {
        newElement.classList.add('menu__item_active');
      }
      page.menu.menuList.append(newElement);
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      element.classList.add('menu__item_active');
    } else {
      element.classList.remove('menu__item_active');
    }
  }

  activeID.id = activeHabbit.id;
}
