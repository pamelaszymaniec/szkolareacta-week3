import { useState } from "react";

function UserSearch({ query }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.search.value);
    query(e.target.search.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleReset = () => {
    setValue("");
    query("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="search" className="form__label">
            Firstname/Lastname or both:
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Search for..."
            id="search"
            name="search"
            value={value}
            onChange={handleValue}
          />
        </div>
      </form>
      <button className="btn btn--red m-l-10" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default UserSearch;
