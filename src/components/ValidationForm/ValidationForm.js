import { useState, useEffect } from "react";
import SingleForm from "./SingleForm";
import validate from "./validate";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    bio: "",
    gender: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setCheckboxes({
        ...checkboxes,
        [name]: !checkboxes[name],
      });
      return;
    }
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, checkboxes));
    const validationCheck = validate(values, checkboxes);
    setIsSubmitting(true);
    //reset
    if(Object.keys(validationCheck).length === 0)  {
      setValues({
        name: "",
        email: "",
        bio: "",
        gender: "",
      })
      setCheckboxes({
        terms: false
      })
    }
  };

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }
  },);

  return { handleChange, values, handleSubmit, errors, checkboxes };
};

function ValidationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleChange, values, handleSubmit, errors, checkboxes } = useForm(
    submitForm,
    validate
  );

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <SingleForm
        errors={errors}
        handleChange={handleChange}
        values={values}
        handleSubmit={handleSubmit}
        checkboxes={checkboxes}
      />
      {isSubmitted && <p>Wysłano formularz, dzięki!</p>}
    </>
  );
}

export default ValidationForm;
