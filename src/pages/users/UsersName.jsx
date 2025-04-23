const UserName = (props) => {
    console.log(props.users);
    return (
        <ol>
            { props.users.map((user) => (
                <li key = {user.id}>  {user.name}  </li> // id="1", name="Tetiana"...
          ))}
        </ol>
    );
}

export default UserName;