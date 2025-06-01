import { activeID } from '../variables/activeId.js';
import { habbits } from '../variables/habbits.js';
import renderMenu from './renderMenu.js';
import renderHead from './renderHead.js';
import renderBody from './renderBody.js';

export default function rerender() {
  const activeHabbit = habbits.habbitsArr.find(
    (habbit) => habbit.id === activeID.id
  );
  if (!activeHabbit) return;

  renderMenu(activeHabbit);
  renderHead(activeHabbit);
  renderBody(activeHabbit);
}
