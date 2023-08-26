import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PostList from "./PostList";
import Post from "./Post";
import FormModal from "./FormModal";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

function App() {
  const [newPosts, setNewPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setNewPosts([...newPosts, newPost]);
  };

  return (
    <Router>
      <Navbar />
      <Header/>
      <div className="App min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="w-full max-w-3xl">
         
          <Routes>
            <Route path="/" element={<PostList newPosts={newPosts} />} />
            <Route path="/post/:id" element={<Post newPosts={newPosts} />} />
          </Routes>
          <br />
          <FormModal onAddPost={handleAddPost} />
          <br />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
