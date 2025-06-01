import getEventTargetIndex from '../utils/getEventTargetIndex.js';
import setComment from '../utils/setComment.js';

export default function renderForm() {
  const form = document.createElement('form');
  form.classList.add('habbit__form');
  form.innerHTML = `
        <input
        name="comment"
        class="input_icon"
        type="text"
        placeholder="Comment"
        value=""
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
    console.log(comment);
    if (comment !== '') {
      setComment(index, comment);
    }
  });
  return form;
}
