// import userImg from "../images/user.png"; //using in VS

function UserCard({
    id = 0,
    name = "Olga",
    city = "Lviv",
    position = "Student",
    avatar = "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
  }) {
    
    let cardStyle = {
      color: "white",
      fontSize: "18px",
      background: "lightblue",
      border: "5px solid teal",
      margin: "12px auto",
    };
  
    let imageItem = avatar ? (
      <img style={{ width: "100px" }} src={avatar} alt="" />
    ) : (
      <img style={{ width: "100px" }} src={userImg} alt="" />
      // <p>Not Defind</p>
    );
  
    return (
      <div style={cardStyle}>
        <h3> Name: {name}</h3>
        <h4> Native City: {city}</h4>
        {imageItem}
      </div>
    );
  }
  
export default UserCard;
  
  