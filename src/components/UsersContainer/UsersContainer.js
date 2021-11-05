import { useEffect, useState } from "react";
import UserSearch from "./UserSearch";
import UserList from "./UsersList";

function UserContainer() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //     set search query to empty string
  const [query, setQuery] = useState("");
  const [matchedUser, setMatchedUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("./users.json")
        .then((response) => response.json())
        .then((result) => {
          setIsLoaded(true);
          setUsers(result.users);
        })
        .catch((error) => {
          setIsLoaded(true);
          console.error(error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMatchedUser(
      users.filter((user) => {
        const userFullName = (user.firstname + " " + user.lastname)
          .toLowerCase()
          .indexOf(query.toLowerCase());
        const userFirstName = user.firstname
          .toLowerCase()
          .indexOf(query.toLowerCase());
        const userLastName = user.lastname
          .toLowerCase()
          .indexOf(query.toLowerCase());
        if (userFullName > -1 || userFirstName > -1 || userLastName > -1) {
          return true;
        }
        return false;
      })
    );
  }, [users, query]);

  if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="users">
        <UserSearch query={setQuery} />
        <div className="users__list">
          <h4>Users List</h4>
          {Object.keys(matchedUser).length > 0 ? (
            <UserList users={matchedUser} />
          ) : (
            <p>No user matched the criteria you provided</p>
          )}
        </div>
      </div>
    );
  }
}

export default UserContainer;
