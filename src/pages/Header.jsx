import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <span>IPZ-21</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/users">Users</Link>
                <Link to="/books">Books</Link>
            </nav>
        </header>
    );
}
export default Header;