import "./signUp.css";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = () => {
    setIsPressed(true); // Nút bị nhấn
  };

  const handleMouseUp = () => {
    setIsPressed(false); // Nút bật lên
  };


    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:9090/login", {
          email,
          password,
        });

        if (response.data.success || response.status === 200) {
          toast.success("Login successful!");
          navigate("/dashboard");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Invalid email or password!");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    };
  return (
    <div id="bg--admin">
      <div id="frame">
        <div id="title">
          <h1>Sign into your Admin web</h1>
        </div>
        <div id="info">
          <p>Email</p>
          <input
            className="input--pw"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email"
          />

          <p>Password</p>
          <input
            className="input--pw"
            type={showPassword ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <div id="showpw">
            <input
              onclick="showPassword"
              type="checkbox"
              onClick={togglePasswordVisibility}
            />
            <label>Show Password</label>
          </div>
          <button
            onClick={handleLogin}
            className={`${isPressed ? "pressed" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
