import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../API";
import { makePost } from "../API";

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
    <div></div>
  )
}
// export default function makePost(_id) {
//   const POST_ID = {
//     token: "token",
//     title: "title",
//     description: "description",
//     price: "price",
//     location: "location",
//     willDeliver: "wilDeliver",
//   };
// }