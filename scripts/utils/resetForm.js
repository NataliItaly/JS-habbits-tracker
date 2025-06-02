export default function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = '';
  }
}
