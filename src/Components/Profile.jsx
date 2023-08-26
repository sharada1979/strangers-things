// import the useState hook from React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myData } from "../API";
export default function Profile(_id) {
  const POST_ID = {
    token: "token",
    title: "title",
    description: "description",
    price: "price",
    location: "location",
    willDeliver: true,
  };
  const [post, setPost] = useState(POST_ID);
  const navigate = useNavigate();
  function handleChange(e) {
    const name = e.target.post;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  }
  useEffect(() => {
    const data = async () => {
      const response = await myData(localStorage.getItem("token"));
      console.log(response);
    };
    data();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    await makePost(post);
    navigate("/post");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a New Post:</label>
        <input
          token="token"
          title="title"
          description="description"
          price="price"
          location="location"
          willDeliver="true"
          value={post._id}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}