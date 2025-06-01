import { habbits } from '../variables/habbits.js';
import { activeID } from '../variables/activeId.js';
import saveData from './saveData.js';
import rerender from '../render/rerender.js';

export default function setComment(index, text) {
  habbits.habbitsArr[activeID.id].days[index].comment = text;

  saveData(habbits.habbitsArr);
  rerender(activeID.id);
}
