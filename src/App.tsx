import React from "react";
import "./App.css";
import { Nav } from "./presentation/components/Nav/Nav";
import Register from "./presentation/pages/Register";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./presentation/pages/Home";
import Login from "./presentation/pages/Login";
import Upload from "./presentation/pages/Upload";
import Notfound from "./presentation/pages/notfound";
import Profile from "./presentation/pages/Profile";
import Footer from "./presentation/components/Footer/Footer";
import Topic from "./presentation/pages/Topic";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topic/:id" element={<Topic />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/:id" element={<Child />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
        <br />
        <Footer />
      </div>
    </div>
  );
  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
}

export default App;
