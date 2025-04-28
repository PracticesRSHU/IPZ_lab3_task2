import { useOutletContext, Link } from "react-router-dom";
import "./css/books.css"

const BooksList = () => {
    const [books, setBooks] = useOutletContext();
    const removeBook=(id)=>{
        // const newBooks=books.filter(book=>book.id!=id);
        // setBooks(newBooks);
        // setBooks(books=>{
        //     return books.filter(book=>book.id!=id);
        // });
        setBooks(books=> books.filter(book=>book.id!=id));
    }

    return (
        <div className="books">
            <Link to="new">New Book</Link>
            <table className="book-tables">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>title</th>
                        <th>pages</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td><img width="50px" src={b.pathImg} alt="" /></td>
                                <td><Link to={`/books/${b.id}`}>{b.title}</Link></td>
                                <td>{b.pages}</td>
                                <td><button onClick={()=>removeBook(b.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


export default BooksList;



