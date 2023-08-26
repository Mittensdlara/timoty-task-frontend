import React, { useState } from "react";

const Form = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      title,
      body: content,
    };
    
    onAddPost(newPost);
    
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
        Title:
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
        required
      />

      <label htmlFor="content" className="block text-gray-700 font-bold mt-4 mb-2">
        Content:
      </label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
        rows="4"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
      >
        Create Post
      </button>
    </form>
  );
};

export default Form;
