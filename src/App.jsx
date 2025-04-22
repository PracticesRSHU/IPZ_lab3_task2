import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import Footer from './pages/Footer';
import UserList from './pages/users/UserList';

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
      id: 2,
      name: "Oksana",
      city: "Lviv",
      position: "Student",
      avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/users" element={<UserList users={USERS} />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
