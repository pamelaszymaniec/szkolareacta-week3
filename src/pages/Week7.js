import { Link } from "react-router-dom";

function Week7 () {
  return (
    <>
      <h1>Tydzień 7. Komunikacja z REST API</h1>
      <h2>Zadanie (1-3). ApiUsersList</h2>
      Zobacz <Link
        to={{
          pathname: "/week7/api-users",
        }}
      >
        Lista uzytkowników
      </Link>
    </>
  );
}

export default Week7;