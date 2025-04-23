import { useParams, useOutletContext } from "react-router-dom";

const Book=()=>{
    const {id}=useParams();
    const [books, setBooks] = useOutletContext();
    let book=books.find(b=>b.id===parseInt(id));
    console.log(book);
    return(
        <><div>
            <h2> TITLE: {book.title}</h2>
            <h3>PAGES: {book.pages}</h3>
        </div>

        </>

    );
}

export default Book;