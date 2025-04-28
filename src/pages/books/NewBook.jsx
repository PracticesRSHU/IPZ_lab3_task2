import { useNavigate, useOutletContext } from "react-router-dom";
import { useRef } from "react";
const NewBook = () => {
    const navigate = useNavigate()
    const [books, setBooks] = useOutletContext();
    let newBook = {
        id: 4,
        title: "",
        pages: 0,
        pathImg: "https://www.freeiconspng.com/uploads/no-image-icon-4.png"
    }

    // ==============1. Using onChange event

    const titleChange = (event) => {
        console.log(event.target);
        console.dir(event.target.value);
        newBook.title = event.target.value;
    }

    const pagesChange = (event) => {
        console.log(event.target);
        console.dir(event.target.value);
        newBook.pages = event.target.value;
    }
    // і т.д.
    // const handleSubmit=(event)=>{
    //     // скасування реакції оброблювача за замовчуванням
    //     event.preventDefault();
    //     // let titletest=document.getElementById("title");
    //     // console.dir(titletest);
    //     // console.log(titletest.value);
    //     newBook.id=books.length+1;
    //     setBooks([...books,newBook]);
    //     navigate("/books");
    // }
    
    // ================ 2. ref binding to input==
    let titleRef = useRef("Noname");
    let pagesRef = useRef(0);
    let pathImgRef = useRef("https://www.freeiconspng.com/uploads/no-image-icon-4.png");
    const handleSubmit = (event) => {
        // скасування реакції оброблювача за замовчуванням
        event.preventDefault();
        // read ref data
        // console.dir(titleRef.current); 
        // console.log(titleRef.current.value);
        newBook.id = books.length + 1;
        newBook.title=titleRef.current.value;
        newBook.pages=pagesRef.current.value;
        newBook.pathImg=pathImgRef.current.value;

        console.log(newBook);
        setBooks([...books, newBook]);
        navigate("/books");
    }

    return (
        <div className="form-newbook">
            <form onSubmit={handleSubmit}>
                <div className="container-input">
                    <label>Title:
                        {/* <input id="title" type="text" name="title" onChange={titleChange} required/>  */}
                        <input ref={titleRef} id="title" type="text" name="title" required />
                    </label>
                </div>
                <div className="container-input">
                    <label>Pages:
                        {/* <input id="number" type="number" name="pages"  onChange={pagesChange} />  */}
                        <input ref={pagesRef} id="number" type="number" name="pages" />
                    </label>
                </div>
                <div className="container-input">
                    <label>PathImg:
                        {/* <input id="pathImg" type="text" name="path" onChange={null}/> */}
                        <input ref={pathImgRef} id="pathImg" type="text" name="path" />
                    </label>
                </div>
                <div className="container-button">
                    <input type="submit" value="Add Book" />
                </div>
            </form>

        </div>

    );

}

export default NewBook;