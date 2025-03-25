// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";




// export default function LoginAdmin () {

//   const navigate = useNavigate()

//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     setError("");

//     try {
//       console.log("Dữ liệu gửi lên:", { email, password });

//       const response = await fetch("http://localhost:8080/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         mode: "cors",
//         credentials: "include",
//         body: JSON.stringify({ email, password })
//       });

//       if (!response.ok) {
//         const errorText = await response.text(); // Lấy lỗi chi tiết từ backend
//         throw new Error(errorText || "Server error");
//       }

//       const data = await response.json();
//       console.log("Raw response:", response);


//       if (data.success) { // Nếu backend trả về success: true
//         alert("Đăng nhập thành công")
//         navigate("/admin/dashboard");
//     } else {
//         setError(data.message || "Email hoặc mật khẩu không đúng");
//         alert(error)
//     }
    
      
//     } 
//     catch (err) {

//       console.error("Lỗi khi gửi request:", err);
//       setError("Lỗi kết nối đến server");
    
//     }
//   };

// }
  