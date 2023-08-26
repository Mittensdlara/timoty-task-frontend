import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        
        if (!postResponse.ok || !commentsResponse.ok) {
          throw new Error("Error fetching post and comments");
        }

        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();

        setPost(postData);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching post and comments:", error);
      }
    };

    fetchPostAndComments();
  }, [id]);

  if (!post) {
    return <div className="font-bold">Loading...</div>;
  }

  return (
    <div className="post-details max-w-3xl mx-auto py-4 px-6">
      <Link to="/" className="mb-4 block text-blue-500 hover:underline">
        &larr; Back to Post List
      </Link>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p>{post.body}</p>
      <h1 className="text-xl font-semibold mt-4 mb-2">Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 border p-4 rounded bg-white shadow">
          <h3 className="text-lg font-semibold">{comment.name}</h3>
          <p className="mt-2">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
