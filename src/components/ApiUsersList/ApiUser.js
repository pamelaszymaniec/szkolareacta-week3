import { useHistory, useParams } from "react-router";
import dateFormat from "dateformat";
import { ApiUserLocation } from "./ApiUserLocation";

function ApiUser({ users }) {
    const { userId } = useParams();
    const history = useHistory();
    console.log(users);
    const { name, location, email, registered, picture } = users.find((user) => user.user_id === userId);
    const userFullName = name.title || name.last ? `${name.title} ${name.first} ${name.last}` : 'No name provided';
    const avatar = picture.thumbnail;
    const { street, city, country} = location;
    const userAddress = location ? `${street.name} ${street.number}, ${city} (${country})` : 'not available'
    const date = dateFormat(registered.date, "mmmm dS, yyyy, h:MM:ss TT");
    const coordinates = [
        Number(location.coordinates.longitude),
        Number(location.coordinates.latitude)
    
      ];
      console.log(coordinates);
    return (
        <>
            <div className="user-profile">
                <div>
                    <img src={avatar} alt={userFullName}/>
                    <h4>
                        Profile: {userFullName}
                    </h4>
                    <p><strong>From:</strong> {userAddress}</p>
                    <p><a href={`mailto: ${email}`}>{email}</a></p>
                    <p><strong>Registered:</strong> {date}</p>
                </div>
                <div>
                    <h3>Location:</h3>
                    <ApiUserLocation position={coordinates}/>
                </div>

            </div>
            <button className="btn" onClick={() => history.goBack()}>
                Go back
            </button>
        </>
    )
}

export default ApiUser;

