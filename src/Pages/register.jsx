import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ username, email, password });

    try {
      const response = await fetch(
        "http://localhost/JSX-MSMP/src/database/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        },
      );

      const data = await response.json();
      console.log("Server response:", data); // log server response

      if (data.success) {
        alert("Registration successful! Redirecting home.");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setErrorMessage(data.error); // Show error if any
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="login-head">Register</div>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Type your username here"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="icon"
                >
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
              </div>
            </label>
            <label>
              E-mail:
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="icon"
                >
                  <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
                </svg>
              </div>
            </label>
            <label>
              Password:
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete=""
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  className="icon"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                </svg>
              </div>
              <div className="forgot-password">Forgot password?</div>
            </label>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button type="submit" id="register">
              Register
            </button>
          </form>
        </div>
        <div className="signup-head">
          <a href="./login">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};
export default Login;
