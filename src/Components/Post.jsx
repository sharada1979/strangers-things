import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../API";
import { deletePost } from "../API";


// 1. Get all the post and displayed them on the screen
// 2. create a search bar and filter trougt the post

// OPTION 1 for fethcing and filtering...

export default function Post({ BASE_URL }, token) {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    async function fetchMyData() {
      const { data } = await fetchPosts(token);
      setPosts(data.posts);
      console.log(data.posts);
      // setLoading(false);
    }
    fetchMyData();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <div key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <p className="post-price">{post.price}Price: </p>
            <p className="post-location">{post.location}Location: </p>
            {post.messages.map((messages) => {
              <div key={messages.fromUser._id}>
                <p>{messages.content}</p>
                <p>{messages.fromUser.username}</p>
              </div>;
            })}
            <button
              onClick={async () =>
                await deletePost(localStorage.getItem("token"), post._id)
              }
            >
              Delete Button
            </button>
          </div>
        ))}
      </ul>
      {/* isAuthor post */}
      {/* <h3>Post Author</h3> */}
    </div>
  );
}


