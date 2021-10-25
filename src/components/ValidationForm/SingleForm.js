function SingleForm({
  handleChange,
  values,
  handleSubmit,
  errors,
  checkboxes,
  disabled,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>{errors.name && <span className="error">{errors.name}</span>}</p>
        <label htmlFor="name">Imię:</label>
        <input
          placeholder="name"
          name="name"
          onChange={handleChange}
          type="text"
          value={values.name}
        />
      </div>
      <div>
        <p>{errors.email && <span className="error">{errors.email}</span>}</p>
        <label htmlFor="name">Adres e-mail:</label>
        <input
          placeholder="email"
          name="email"
          onChange={handleChange}
          type="email"
          value={values.email}
        />
      </div>
      <div>
        {errors.bio && <span className="error">{errors.bio}</span>}
        <label htmlFor="bio">Krótkie bio:</label>
        <textarea
          placeholder="napisz cos o sobie..."
          name="bio"
          onChange={handleChange}
          type="text"
          value={values.bio}
        ></textarea>
      </div>
      <div
        // value={values.gender}
        role="radiogroup"
        className={`radio-group ${errors.name ? "input-error" : ""}`}
        onChange={handleChange}
      >
        {errors.gender && <span className="error">{errors.gender}</span>}
        <label htmlFor="gender">Wybierz płeć:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="female"
          checked={values.gender === "female"}
          onChange={handleChange}
        />
        <span>Kobieta</span>
        <input
          type="radio"
          id="female"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        />
        <span>Mężczyzna</span>
      </div>

      <div>
        {errors.terms && <p className="error">{errors.terms}</p>}

        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChange}
          checked={checkboxes.terms}
        />
        <label htmlFor="terms">Akceptuję regulamin</label>
      </div>
      <button type="submit" disabled={disabled}>
        Wyślij
      </button>
    </form>
  );
}

export default SingleForm;
