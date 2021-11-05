import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";

function UserProfile() {
  const location = useLocation();
  const user = location.state.user;
  const history = useHistory();
  return (
    <>
      <h2>5. User Profile</h2>
      <div className="user-profile">
        <h4>
          Profile: {user.firstname} {user.lastname}
        </h4>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>From:</strong> {user.city}, {user.country}
        </p>
        <p>
          <strong>email:</strong>{" "}
          <a href={`mailto: ${user.email}`}>{user.email}</a>{" "}
        </p>
      </div>
      <button className="btn" onClick={() => history.goBack()}>
        Go back
      </button>
    </>
  );
}

export default UserProfile;
