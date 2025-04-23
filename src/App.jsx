import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Footer from './pages/Footer';
import UserList from './pages/users/UserList';
import UserName from './pages/users/UsersName';
import UserCard from './pages/users/UserCard';
import UserDetail from './pages/users/UserDetail';
import BooksLayout from './pages/books/BooksLayout';
import BooksList from './pages/books/BooksList';
import Book from './pages/books/Book';

function App() {

  const USERS = [
    {
      id: 1,
      name: "Tetiana",
      city: "Rivne",
      position: "Teacher",
      avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },
    {
      id: 2,
      name: "Igor",
      city: "Rivne",
      position: "Student",
      avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    },
    {
      id: 3,
      name: "Oksana",
      city: "Lviv",
      position: "Student",
      avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },
  ];

  // const [users, setUsers]=useState(USERS);

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="context">
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                {/* <Route path="/users" element={<UserList users={USERS} />} />
                <Route path="/users/2" element={<UserCard user={USERS[2]}/>} />
                <Route path="/users/:id" element={<UserDetail users={USERS}/>} />
                <Route path="/users/new" element={<UserNew users={USERS}/>} /> */}
                <Route path="/users">
                  {/* index <=> path="" */}
                  <Route index element={<UserList users={USERS} />} />
                  <Route path="2" element={<UserCard user={USERS[2]} />} />
                  <Route path=":id" element={<UserDetail users={USERS} />} />
                  {/* <Route path="new" element={<UserNew users={USERS} />} /> */}
                </Route>
                <Route path="/books" element={<BooksLayout/>}>
                  <Route index element={<BooksList />} />
                  <Route path=":id" element={<Book/>} />
                  
                </Route>
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <aside>
              <Routes>
                {/* <Route path="/users" element={<UserName users={USERS} />} /> */}
                <Route path="*" element={<UserName users={USERS} />} />
              </Routes>
            </aside>
          </div>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
