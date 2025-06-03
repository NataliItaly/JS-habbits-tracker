import { activeID } from '../variables/activeId.js';
import { habbits } from '../variables/habbits.js';
import { page } from '../variables/page.js';
import activeHabbit from '../variables/activeHabbit.js';
import renderMenu from './renderMenu.js';
import renderHead from './renderHead.js';
import renderBody from './renderBody.js';

export default function rerender(hashId = null) {
  console.log('rerender');
  if (page.content.querySelector('.content_null')) {
    console.log(page.content.querySelector('.content_null'));
    page.content.querySelector('.content_null').remove();
  }
  if (hashId) {
    console.log('hashId ', hashId);
  }
  const currentActiveHabbit = activeHabbit(); /*habbits.habbitsArr.find(
    (habbit) => habbit.id === activeID.id
  );*/
  //hashId ? hashId - 1 === habbit.id : activeID.id
  console.log(activeID.id);
  console.log('currentActiveHabbit ', currentActiveHabbit);
  /*if (!activeHabbit) {
    console.log('no active habbit');
    return;
  }*/

  //console.log(activeHabbit);
  document.location.replace(document.location.pathname + `#${activeID.id + 1}`);

  renderMenu(currentActiveHabbit);
  renderHead(currentActiveHabbit);
  renderBody(currentActiveHabbit);
}
