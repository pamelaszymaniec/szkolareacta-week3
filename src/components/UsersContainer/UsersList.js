import User from "./User";
function UserList({ users }) {
  return (
    <ul className="users__list">
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
