import { useOutletContext, Link } from "react-router-dom";

const BooksList = () => {
    const [books, setBooks] = useOutletContext();
    return (
        <div className="books">
            <table className="book-tables">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>pages</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td><Link to={`/books/${b.id}`}>{b.title}</Link></td>
                                <td>{b.pages}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


export default BooksList;