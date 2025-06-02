import { activeID } from '../variables/activeId.js';
import { habbits } from '../variables/habbits.js';
import renderMenu from './renderMenu.js';
import renderHead from './renderHead.js';
import renderBody from './renderBody.js';

export default function rerender(hashId = null) {
  if (hashId) {
    console.log('hashId ', hashId);
  }
  const activeHabbit = habbits.habbitsArr.find((habbit) =>
    hashId ? hashId - 1 : habbit.id === activeID.id
  );
  if (!activeHabbit) return;

  console.log(activeHabbit);
  document.location.replace(document.location.pathname + `#${activeID.id + 1}`);

  renderMenu(activeHabbit);
  renderHead(activeHabbit);
  renderBody(activeHabbit);
}
