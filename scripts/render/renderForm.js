import getEventTargetIndex from '../utils/getEventTargetIndex.js';
import setComment from '../utils/setComment.js';
import { habbits } from '../variables/habbits.js';
import { activeID } from '../variables/activeId.js';
import saveData from '../utils/saveData.js';
import rerender from './rerender.js';
import validateForm from '../utils/validateForm.js';

export default function renderForm(inputPlaceholder) {
  const form = document.createElement('form');
  form.classList.add('habbit__form');
  form.innerHTML = `
        <input
        name="comment"
        class="input_icon"
        type="text"
        placeholder="${inputPlaceholder}"
        value="${inputPlaceholder}"
        />
        <img
        class="input__icon"
        src="./images/comment.svg"
        alt="Comment item"
        />
        <input class="button habbit__skip-comment" type="reset" value="Skip for now">
        <button class="button" type="submit">Done</button>
        `;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const index = getEventTargetIndex(e);
    console.log('index', index);
    const formData = validateForm(e.target, ['comment']);
    console.log(formData);
    if (!formData) {
      return;
    }
    const comment = formData.comment;
    console.log(this);
    if (index <= habbits.habbitsArr[activeID.id].days.length - 1) {
      setComment(index, comment);
    } else {
      habbits.habbitsArr = habbits.habbitsArr.map((habbit, i) =>
        i === activeID.id
          ? { ...habbit, days: [...habbit.days, { comment }] }
          : habbit
      );
      saveData(habbits.habbitsArr);
      rerender();
    }
  });

  //console.log(form.querySelector('.habbit__skip-comment'));
  form.addEventListener('reset', function () {
    console.log('reset');
    //form.reset();
  });

  return form;
}
//<button class="button habbit__skip-comment" type="reset">Skip for now</button>
