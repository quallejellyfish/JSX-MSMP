import React, { useState } from "react";
import "../Styles/home.css";
import ProfilePicture from "../Assets/pinkjellyfish.jpg";
import banner from "../Assets/Silberfuchs.jpg";
import banner2 from "../Assets/mobile.png";
import PostOverlay from "./postOverlay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showPost, setShowPost] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Qualle Jellyfish",
      text: "Todo: store posts, save-posts, like & comment on posts logic, profile picture system, name system, secure register/login, make a CRUD || admin-view, add timestamps to posts, create a backend api for the login register system to not use localhost for the system so i can use render.com",
      image: banner,
      likes: 42,
      comments: 7,
    },
    {
      id: 2,
      author: "Qualle Jellyfish",
      text: "Design idea to make mobile more responsive",
      image: banner2,
      likes: 10,
      comments: 7,
    },
  ]);
  const navigate = useNavigate();

  function createPost() {
    console.log("button pressed");
    setShowPost(true);
  }

  const changeRoute = () => {
    navigate("/saved-posts");
  };

  const changeRoute2 = () => {
    navigate("/saved-timestamp");
  };

  const changeRoute3 = () => {
    navigate("/register");
  };

  const changeRoute4 = () => {
    navigate("/login");
  };

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      author: "Qualle Jellyfish",
      ...newPost,
      likes: 0,
      comments: 0,
    };

    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <>
      <div className="top">
        <div className="nav-bar">
          <button onClick={changeRoute4} title="temporary">
            Login
          </button>
          <button onClick={changeRoute3} title="temporary">
            Register
          </button>
        </div>
      </div>

      <div className="container">
        {/* left */}
        <div className="left">
          <div className="left-content">
            <img id="banner" src={banner} alt="b a n n e r" />
            <img id="profilePicture" src={ProfilePicture} alt="what" />
            <div className="text-content">
              <h3>Qualle Jellyfish</h3>
              <h5>
                About me:<br></br>I made this website when i was 14 years old.
              </h5>
            </div>
          </div>
          <div className="left-content">
            <div className="below">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>
              <button className="save-Posts" onClick={changeRoute}>
                Saved Posts
              </button>
            </div>
            <div className="below">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>
              <button className="save-Posts" onClick={changeRoute2}>
                Timespans
              </button>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="middle">
          <div className="center-content">
            <div className="post-container">
              <img src={ProfilePicture} alt="what" />
              <button className="togglePostUi" onClick={createPost}>
                <strong>Create a post (click)</strong>
              </button>
              {showPost && (
                <PostOverlay setShowPost={setShowPost} addPost={addPost} />
              )}
            </div>
          </div>
          {/* Post feed */}
          <div className="post-feed">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-header">
                  <img
                    src={ProfilePicture}
                    alt="Profile"
                    className="post-profile-pic"
                  />
                  <h4>{post.author}</h4>
                </div>
                <p>{post.text}</p>
                {post.image && (
                  <img src={post.image} alt="Post" className="post-image" />
                )}
                <div className="post-actions">
                  <button className="like-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                    </svg>
                    {post.likes}
                  </button>
                  <button className="comment-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    </svg>
                    {post.comments}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
        {/* right */}
        <div className="right">
          <div className="right-content">
            what am i supposed to put here.. friends maybe??
          </div>
          <footer className="liecense">
            Copyright all rights reserve wolfi ©️ 2024
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
