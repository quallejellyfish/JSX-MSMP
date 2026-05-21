import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usernameEmail, setUsernameOrPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    console.log({ usernameEmail, password });

    try {
      const response = await fetch(
        "http://localhost/JSX-MSMP/src/database/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usernameEmail, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text(); // raw response text
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setErrorMessage(
          "Server returned invalid JSON. Check server logs for details."
        );
        return;
      }

      console.log("Server response:", data); // server response

      if (data.success) {
        alert("Login successful! Redirecting home.");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setErrorMessage(data.error || "Unknown error occurred"); // Show error if any
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="login-head">Login</div>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label>
              Username or Email:
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Type your Username or Email here"
                  value={usernameEmail}
                  onChange={(e) => setUsernameOrPassword(e.target.value)}
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
              Password:
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Password here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete=""
                  disabled={isLoading}
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
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="signup-head">
          <a href="./register">Dont have an account?</a>
        </div>
      </div>
    </div>
  );
};
export default Login;
