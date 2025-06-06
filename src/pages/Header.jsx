import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Header = () => {
    const { userName, email, clearUserName } = useContext(AuthContext);
    return (
        <header className='header'>
            <span>IPZ-21 {userName}  {email}</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/users">Users</Link>
                <Link to="/books">Books</Link>
                {userName ? (
                    <button onClick={() => clearUserName()}> Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
}
export default Header;