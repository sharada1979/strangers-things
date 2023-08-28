import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile";
import Post from "./components/Post";
import { Messages } from "./components/Messages";

export default function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "" 
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );
  return (
    <>
      <header>
        <NavBar setToken={setToken} setUsername={setUsername} />
      </header>
      <div id="container">
        <div id="navbar">
          <h1>
            <span className="app-heading">Stranger’s Things</span>
          </h1>
        </div>
      </div>
      <div>
        <div id="main-section">
          <Routes>
            {/* Route for Home Componests */}
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<Post />} />
            <Route
              path="/login"
              element={
                <Login
                  token={token}
                  setToken={setToken}
                  setUsername={setUsername}
                  username={username}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
    );
            }
            
            
