import React, { useState, useRef } from "react";
import ProfilePicture from "../Assets/pinkjellyfish.jpg";
import PropTypes from "prop-types";

const PostOverlay = ({ setShowPost, addPost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [postText, setPostText] = useState("");
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleClick = () => setIsEditing(true);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];

      // Create a FileReader to read the image
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file); // base64 encoded
      console.log(file);
    }
  };

  const handleBlur = (e) => {
    setPostText(e.target.innerText || "");
    setIsEditing(false);
  };

  const handleDismiss = () => {
    setShowPost(false);
  };

  const handlePost = () => {
    if (postText.trim() || imageSrc) {
      addPost({ text: postText, image: imageSrc });
      setShowPost(false);
    }
  };

  const clearImage = () => {
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="overlay">
      <div className="post-content">
        <div className="you">
          <img src={ProfilePicture} alt="what" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "0",
            }}
          >
            <h3>Qualle Jellyfish</h3>
            <h5>text</h5>
          </div>
        </div>
        <div
          className="post-text-field"
          role="textbox"
          tabIndex="0"
          contentEditable={true}
          suppressContentEditableWarning={true}
          data-placeholder={!postText && !isEditing ? "Textfield i guess" : ""}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleClick();
          }}
          onBlur={handleBlur}
          style={{
            minHeight: "8.2rem",
            padding: "0",
          }}
        >
          {postText}
        </div>
        {imageSrc && (
          <div className="image-container">
            <div className="delete-image">
              <button id="destroy-image" onClick={clearImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>

            <img
              className="image-content"
              src={imageSrc}
              alt="Selected"
              width={600}
              height={900}
            />
          </div>
        )}
        <div className="bottom-stuff">
          <button onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="m460-380 280-180-280-180v360ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
            </svg>
          </button>
        </div>
        <hr style={{ paddingBottom: "3rem" }} />
        <button className="post-btn" onClick={handlePost}>
          Post
        </button>

        <button className="dismiss" onClick={handleDismiss}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

PostOverlay.propTypes = {
  setShowPost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default PostOverlay;