import { useForm } from "react-hook-form";

const styles = {
  error: {
    border: "1px solid red",
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
  },
};

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    reset
  } = useForm({ mode: "all" });

  const onSubmit = () => {
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>{errors.name && <span style={styles.errorMsg}>To pole nie moze byc puste</span>}</p>
          <label htmlFor="name">Imię:</label>
          <input style={errors.name && styles.error} type="text" {...register("name", { required: true })} />
        </div>
        <div>
        <p>{errors.email && <span style={styles.errorMsg}>To pole nie moze byc puste</span>}</p>
          <label htmlFor="name">Adres e-mail:</label>
          <input
            type="email"
            {...register("email", { required: true })}
            noValidate
            style={errors.name && styles.error}
          />
        </div>
        <div>
        <p>{errors.bio && <span style={styles.errorMsg}>To pole nie moze byc puste.</span>}</p>
          <label htmlFor="bio">Krótkie bio:</label>
          <textarea
            rows="4"
            cols="50"
            placeholder="Napisz coś o sobie..."
            {...register("bio", { required: true })}
            style={errors.name && styles.error}
          ></textarea>
        </div>
        <div>
        <p>{errors.gender && <span style={styles.errorMsg}>Wybierz płeć</span>}</p>
          <label htmlFor="gender">Wybierz płeć:</label>
          <input
            type="radio"
            {...register("gender", { required: true })}
            value="women"
          />
          <span>Kobieta</span>
          <input
            type="radio"
            {...register("gender", { required: true })}
            value="men"
          />
          <span>Mężczyzna</span>
        </div>
        <div>
        <p>{errors.terms && <span style={styles.errorMsg}>Zaakceptuj regulamin.</span>}</p>
          <input
            type="checkbox"
            {...register("terms", { required: true })}
            value="Regulamin"
          />
          <label htmlFor="terms">Akceptuję regulamin</label>
        </div>
        <button type="submit" disabled={!isValid}>
          Wyślij
        </button>
      </form>
      <div>{isSubmitted && <p>Dziękujemy za wysłanie</p>}</div>
    </>
  );
}

export default ReactHookForm;
