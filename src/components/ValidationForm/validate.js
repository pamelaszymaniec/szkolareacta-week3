export default function validateInfo(values, checkboxes) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Top pole nie moze być poste.";
  }
  if (!values.email) {
    errors.email = "Podaj email.";
  }
  if (!values.bio) {
    errors.bio = "To pole nie moze być puste.";
  }
  if (!values.gender) {
    errors.gender = "Wybierz płeć.";
  }
  if (!checkboxes.terms) {
    errors.terms = "Zaakceptuj regulamin";
  }
  return errors;
}
