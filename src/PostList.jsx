import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const PostList = ({ newPosts }) => {
  const [posts, setPosts] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const imgRes = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        const imgData = await imgRes.json();
        const data = await response.json();
        setPosts(data);
        setImgData(imgData.photos);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!posts) {
    return <div className="font-bold">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {currentPosts.map((post) => {
        const randomIndex = Math.floor(Math.random() * imgData.length);
        const randomImage = imgData[randomIndex];

        return (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="post-list-item bg-white rounded-lg overflow-hidden shadow-md m-4 p-4 w-80 h-96 transform transition-transform hover:scale-105"
          >
            <div className="post-image-container h-48 overflow-hidden">
              <img
                src={randomImage ? randomImage.url : ""}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
          </Link>
        );
      })}
      <div className="pagination mt-4 flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded bg-blue-500 text-white mr-2 w-20"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          className="px-3 py-2 rounded bg-blue-500 text-white w-20"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PostList;
