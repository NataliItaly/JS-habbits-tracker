export default function validateForm(form, fields) {
  const formData = new FormData(form);
  const resultFormData = {};
  let isValid = true;

  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove('error');
    if (!fieldValue) {
      form[field].classList.add('error');
      return;
    }
    resultFormData[field] = fieldValue;
  }

  return resultFormData;
}
