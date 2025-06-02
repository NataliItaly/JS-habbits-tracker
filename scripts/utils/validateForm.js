export default function validateForm(form, fields) {
  const formData = new FormData(form);
  const resultFormData = {};
  let isValid = true;

  for (const field of fields) {
    const fieldValue = formData.get(field);
    console.log(fieldValue);
    form[field].classList.remove('error');
    if (!fieldValue) {
      console.log('no value ', fieldValue);
      form[field].classList.add('error');
      return;
    }
    resultFormData[field] = fieldValue;
  }

  /*for (const field of fields) {
    if (!resultFormData[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
*/
  return resultFormData;
}
