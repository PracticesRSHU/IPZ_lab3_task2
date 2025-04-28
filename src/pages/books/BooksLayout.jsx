import { Outlet } from "react-router-dom";
import { useState } from "react";

const BooksLayout = ({books,setBooks}) => {


    return (<>
        <Outlet context={[books, setBooks]}/>
    </>
    );
}


export default BooksLayout;