import { useEffect, useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import ReactPlaceholder from "react-placeholder";

import ApiUser from "./ApiUser";

function ApiUsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://randomuser.me/api/?results=10')
                .then((response) => response.json())
                .then((data) => {
                    const newUsers = [];
                    Object.entries(data.results).forEach(([key, values]) => {
                        const newUser = {
                            user_id: key,
                            ...values
                        };
                        newUsers.push(newUser);
                    });
                    setUsers(newUsers)
                    setLoading(false);
                })
                .catch((error) => {
                    setError(true);
                    setLoading(false);
                });
        }, 2000);
    }, []);

    //Render elements while 
    const tmp = [];
    for (let i = 0; i < 10; i++) {
        tmp.push(i);
    }

    const userLoading = tmp.map(function (i) {
        return (
            <li key={i} className="user">{i + 1}. <span className="stage">
                <div className="dot-flashing"></div>
            </span></li>
        );
    });

    return (
        <div>
            <Switch>
                <Route path="/week7/api-users/:userId">
                    <ApiUser users={users} />
                </Route>
                <Route path="/week7/api-users">
                    <div className="users">
                        <ul className="users__list">

                            {hasError && <p>An error has occured..</p>}
                            <h2>Lista użytkowników</h2>
                            {isLoading &&
                                <ReactPlaceholder
                                    ready={!isLoading} customPlaceholder={userLoading}

                                />}

                            {users.map((user, index) => (
                                <li className="user" key={user.user_id}>

                                    {index + 1}. <Link to={`/week7/api-users/${user.user_id}`}>{user.name.title} {user.name.first} {user.name.last}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </Route>
            </Switch>
        </div>

    );
}

export default ApiUsersList;