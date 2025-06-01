import { page } from '../variables/page.js';

export default function renderHead(activeHabbit) {
  if (!activeHabbit) return;
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerHTML = `${progress.toFixed(0)}%`;
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}
