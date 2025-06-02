import getEventTargetIndex from '../utils/getEventTargetIndex.js';
import setComment from '../utils/setComment.js';
import { habbits } from '../variables/habbits.js';
import { activeID } from '../variables/activeId.js';
import saveData from '../utils/saveData.js';
import rerender from './rerender.js';

export default function renderForm(inputPlaceholder) {
  const form = document.createElement('form');
  form.classList.add('habbit__form');
  form.innerHTML = `
        <input
        name="comment"
        class="input_icon"
        type="text"
        placeholder="${inputPlaceholder}"
        value=""
        required
        />
        <img
        class="input__icon"
        src="./images/comment.svg"
        alt="Comment item"
        />
        <button class="button" type="submit">Done</button>
        `;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const index = getEventTargetIndex(e);
    const formData = new FormData(form);
    const comment = formData.get('comment');
    //const
    console.log('active ', activeID);
    console.log('last ', habbits.habbitsArr[activeID.id].days.length);
    console.log(comment);
    console.log('index ', index);
    if (comment === '') {
      return;
    }
    if (index < habbits.habbitsArr[activeID.id].days.length - 1) {
      setComment(index, comment);
    } else {
      const updatedHabbits = {
        ...habbits,
        habbitsArr: habbits.habbitsArr.map((habit, index) =>
          index === activeID.id
            ? { ...habit, days: [...habit.days, { comment }] }
            : habit
        ),
      };
      habbits.habbitsArr = habbits.habbitsArr.map((habbit, i) =>
        i === activeID.id
          ? { ...habbit, days: [...habbit.days, { comment }] }
          : habbit
      );
      console.log(habbits.habbitsArr);
      saveData(habbits.habbitsArr);
      rerender();
      //habbits.habbitsArr[activeID.id].days.push({ comment: comment });
    }
  });
  return form;
}
