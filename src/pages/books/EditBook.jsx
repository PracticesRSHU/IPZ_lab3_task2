import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "react-hook-form";
const EditBook = () => {
    const { id } = useParams();
    const [books, setBooks] = useOutletContext();
    let book = books.find(b => b.id === parseInt(id));
    const navigate = useNavigate()
    let editBook = {
        id: book.id,
        title: book.title,
        pages: book.pages,
        pathImg: book.pathImg
    }


    // ================ 2. ref binding to input==
    //     let idRef = useRef(editBook.id);
    //     let titleRef = useRef(editBook.title);
    //     let pagesRef = useRef(editBook.pages);
    //     let pathImgRef = useRef(editBook.pathImg);
    //    console.log(titleRef.current);
    //    console.log(pathImgRef.current);

    //     const submit = (event) => {
    //         // скасування реакції оброблювача за замовчуванням
    //         event.preventDefault();
    //         // read ref data
    //         // console.dir(titleRef.current); 
    //         // console.log(titleRef.current.value);
    //         editBook.id = parseInt(idRef.current.value);
    //         editBook.title=titleRef.current.value;
    //         console.log(editBook.title);
    //         editBook.pages=pagesRef.current.value;
    //         editBook.pathImg=pathImgRef.current.value;

    //         console.log(editBook);
    //         let editBooks=books.map(book=>{
    //             // console.log(book);
    //             // console.log(editBook);
    //             if (book.id===editBook.id) return editBook;
    //             return book;
    //         })
    //         console.log(editBooks);
    //         setBooks(editBooks);
    //         navigate("/books");
    //     }

    // =============3. using hooks from  => useForm
    let { register, handleSubmit} = useForm(
        {
            defaultValues: {
                id: editBook.id,
                title: editBook.title,
                pages: editBook.pages,
                pathImg: editBook.pathImg
            }
        }
    );

    let submitWithUseForm = (updateBook) => {

        console.log(updateBook);    
        let editBooks = books.map(book => {
            if (book.id === updateBook.id) return updateBook;
            return book;
        })
        console.log(editBooks);
        setBooks(editBooks);
        navigate("/books");
    }

    return (
        <div className="form-newbook">
            <form onSubmit={handleSubmit(submitWithUseForm)}>
                <div className="container-input">
                    <label>Id:
                        {/* <input ref={idRef} id="id" defaultValue={idRef.current}  name="id" disabled /> */}
                        <input {...register("id")} disabled />
                    </label>
                </div>
                <div className="container-input">
                    <label>Title:
                        {/* <input ref={titleRef} id="title" type="text" name="title"  defaultValue={titleRef.current} required /> */}
                        <input {...register("title")} type="text" required />
                    </label>
                </div>
                <div className="container-input">
                    <label>Pages:
                        {/* <input ref={pagesRef} id="number" type="number" name="pages" defaultValue={pagesRef.current}/> */}
                        <input {...register("pages")} id="number" type="number" />
                    </label>
                </div>
                <div className="container-input">
                    <label>PathImg:
                        {/* <input ref={pathImgRef} id="pathImg" type="text" name="path" defaultValue={pathImgRef.current} /> */}
                        <input {...register("pathImg")} id="pathImg" type="text" name="path" />
                    </label>
                </div>
                <div className="container-button">
                    <input type="submit" value="Save  Book" />
                </div>
            </form>

        </div>

    );

}

export default EditBook;