import React, { useState, useEffect } from "react";

function Time() {
  const [currentTime, setCurrentTime] = useState("");

  // Hàm cập nhật thời gian
  const updateClock = () => {
    const now = new Date();

    // Lấy từng phần của thời gian
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = now.getFullYear();

    // Format thời gian (Giờ:Phút:Giây - Ngày/Tháng/Năm)
    const timeString = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    setCurrentTime(timeString); // Cập nhật state
  };

  // Sử dụng useEffect để cập nhật thời gian mỗi giây
  useEffect(() => {
    const intervalId = setInterval(updateClock, 1000); // Cập nhật mỗi giây
    return () => clearInterval(intervalId); // Dọn dẹp khi component bị hủy
  }, []);

  return (
      <div style={{ fontSize: "20px", color: "#007BFF", height: "48px", paddingTop: "10px", paddingLeft: "200px" }}>{currentTime}</div>
  );
}

export default Time;
