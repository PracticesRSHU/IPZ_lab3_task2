import { Outlet } from "react-router-dom";
import { useState } from "react";

const BooksLayout = () => {
    const booksArrays=[
    {id:1, title: "Harry Potter", pages:765},
    {id:2, title: "Кобзар", pages:365},
    {id:3, title: "React Native", pages:578},
    ]

    let [books, setBooks]=useState(booksArrays);
    return (<>
        <Outlet context={[books, setBooks]}/>
    </>
    );
}


export default BooksLayout;