export default function renderNullContent() {
  const nullContent = document.createElement('div');
  nullContent.classList.add('content_null');
  nullContent.innerHTML = `
            <p>You don't have any habbit yet.</p>
            <p>Lets add some habbit!</p>
        `;
  return nullContent;
}
