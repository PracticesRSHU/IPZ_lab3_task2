import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const UserName = (props) => {
    console.log(props.users);
    const {userName}=useContext(AuthContext);
    return (
        <div>
            <h5>Вітаємо, {userName}!</h5>
            <ol>
                { props.users.map((user) => (
                    <li key = {user.id}>  {user.name}  </li> // id="1", name="Tetiana"...
              ))}
            </ol>
        </div>
    );
}

export default UserName;