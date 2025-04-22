import { useState } from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
  let users=props.users;

  // let [users, setUsers] = useState(props.users);
  // console.log(users);
  // let countUser = users.length;
  // const newUser = {
  //   id: ++countUser,
  //   name: "NoName",
  //   position: "Teacher",
  //   avatar: "",
  // };
  // const addUser = () => {
    
  //   setUsers([...users, newUser]);
  // };

  
  return (
    // <React.Fragment>
    <div>
      <h2>User List</h2>
      {/* <button onClick={addUser}>Create New User</button> */}
        {users.map((user, index) => (
        <UserCard key={user.id} {...user} /> // id="1", name="Tetiana"...
      ))}
    </div>
    // </React.Fragment>
  );
};

export default UserList;
