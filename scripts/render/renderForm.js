import getEventTargetIndex from '../utils/getEventTargetIndex.js';
import setComment from '../utils/setComment.js';
import { habbits } from '../variables/habbits.js';
import { activeID } from '../variables/activeId.js';
import saveData from '../utils/saveData.js';
import rerender from './rerender.js';
import validateForm from '../utils/validateForm.js';

export default function renderForm(placeholder, value) {
  const form = document.createElement('form');
  form.classList.add('habbit__form');
  form.innerHTML = `
        <input
        name="comment"
        class="input_icon"
        type="text"
        placeholder="${placeholder}"
        value="${value}"
        />
        <img
        class="input__icon"
        src="./images/comment.svg"
        alt="Comment item"
        />
        <input class="button habbit__skip-comment" type="reset" value="Skip for now">
        <button class="button habbit__done-btn" type="submit"></button>
        `;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const index = getEventTargetIndex(e);
    const formData = validateForm(e.target, ['comment']);
    if (!formData) {
      return;
    }
    const comment = formData.comment;
    if (index <= habbits.habbitsArr[activeID.id - 1].days.length - 1) {
      setComment(index, comment);
    } else {
      habbits.habbitsArr = habbits.habbitsArr.map((habbit, i) =>
        i === activeID.id - 1
          ? { ...habbit, days: [...habbit.days, { comment }] }
          : habbit
      );
      saveData(habbits.habbitsArr);
      rerender(activeID.id);
    }
  });

  return form;
}
