import { activeID } from '../variables/activeId.js';
import { page } from '../variables/page.js';
import activeHabbit from '../variables/activeHabbit.js';
import renderMenu from './renderMenu.js';
import renderHead from './renderHead.js';
import renderBody from './renderBody.js';

export default function rerender(activeId) {
  activeID.id = activeId;
  console.log('rerender');
  if (page.content.querySelector('.content_null')) {
    page.content.querySelector('.content_null').remove();
  }

  const currentActiveHabbit = activeHabbit(activeId);
  console.log('current habbit ', currentActiveHabbit);

  document.location.replace(document.location.pathname + `#${activeId}`);

  renderMenu(currentActiveHabbit);
  renderHead(currentActiveHabbit);
  renderBody(currentActiveHabbit);
}
