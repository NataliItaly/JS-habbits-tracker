import { activeID } from './activeId.js';
import { habbits } from '../variables/habbits.js';

export default function activeHabbit(activeId) {
  return habbits.habbitsArr.find((habbit) => habbit.id === activeId);
}
