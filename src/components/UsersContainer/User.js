import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <li className="user">
      <Link
        className="user__link"
        to={{
          pathname: "/user-profile",
          state: {
            user,
          },
        }}
      >
        {user.firstname} {user.lastname}
      </Link>
    </li>
  );
}

export default User;
