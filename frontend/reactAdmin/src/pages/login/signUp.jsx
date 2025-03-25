import "./signUp.css";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


export default function SignUp() {

  const navigate = useNavigate()

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isPressed, setIsPressed] = useState(false);



  const handleMouseDown = () => {
    setIsPressed(true); // Nút bị nhấn
  };

  const handleMouseUp = () => {
    setIsPressed(false); // Nút bật lên
  };

  
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
  
    try {
      console.log("Dữ liệu gửi lên:", { email, password });

      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Server error");
      }
  
      const data = await response.json();
      console.log("Raw response:", response);

  
      if (data.success) {
        alert("Đăng nhập thành công")
        navigate("/admin/dashboard");
     } else {
        setError(data.message || "Email hoặc mật khẩu không đúng");
        alert(error)
     }
     
      
    } 
    catch (err) {

      console.error("Lỗi khi gửi request:", err);
      setError("Lỗi kết nối đến server");
    
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
              checked={!showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
              type="checkbox"
            />
            <label>Show Password</label>
          </div>
          <button
            onClick={handleSubmit}
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
