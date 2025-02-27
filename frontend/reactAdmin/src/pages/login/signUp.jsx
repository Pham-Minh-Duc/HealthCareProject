import "./signUp.css";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function SignUp() {

  const dataLogin = [
    {
      email: "123",
      password: "123"
    }
  ]

  const navigate = useNavigate()

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

  const handleSubmit = () => {
    const user = dataLogin.find((user) => 
      user.email === email && user.password === password
    )

    if(user){
      localStorage.setItem("isLoggingIn", "true")
      toast.success("Đăng nhập thành công !", { autoClose: 2000})
      alert("Đăng nhập thành công")
      setTimeout(() => {
        navigate("/admin/dashboard")
      }, 1000)
    }
    else{
      toast.error("Email hoặc mật khẩu không đúng", { autoClose: 2000 })
    }
  }

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
              onclick={showPassword}
              type="checkbox"
              onClick={togglePasswordVisibility}
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
