import Dialog from "../components/Dialog/Dialog";
import SnackbarTask from "../components/Snackbar/SnackbarTask";
import ToggleMenu from "../components/ToggleMenu/ToggleMenu";
import { Link } from "react-router-dom";

function Week5({ handleToggle, active }) {
  return (
    <>
      <h1>Tydzień 5. Budowa Interfejsu</h1>
      <Dialog />
      <SnackbarTask />
      <h2>3. Menu nawigacyjne </h2>
      <ToggleMenu active={active} handleToggle={handleToggle} />
      <h2>4. Wyszukiwanie użytkowników</h2>
      Zobacz <Link
        to={{
          pathname: "/users",
        }}
      >
        tutaj
      </Link>
    </>
  );
}

export default Week5;
