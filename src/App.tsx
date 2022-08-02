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
import PostDetails from "./presentation/pages/PostDetails";
import UserPage from "./presentation/pages/UserPage";
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
            <Route path="/topic/:id" element={<TopicChild />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/:id" element={<UserChild />} />
            <Route path="/posts/:id" element={<PostDetailsChild/>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
        <br />
        <Footer />
      </div>
    </div>
  );


  function UserChild() {
    let { id } = useParams();
    return (
      <div>
        {id !== undefined && <UserPage userID={id} /> }
      </div>
    );
  }

  function PostDetailsChild() {
    let { id } = useParams();
    return (
      <div>
          {id !== undefined && <PostDetails postId={id} />}
      </div>
    );
  }
  function TopicChild() {
    let { id } = useParams();
    return (
      <div>
          {id !== undefined && <Topic topicId={id} />}
      </div>
    );
  }
}

export default App;
