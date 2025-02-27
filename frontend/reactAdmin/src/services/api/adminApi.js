
  
export const getUsers = async () => {
    const API_URL = "/users"; // Đảm bảo API đúng
    console.log("Fetching from:", API_URL);
  
    try {
      const response = await fetch(API_URL, { cache: "no-store", mode: "cors" });
  
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Lỗi: API không trả về JSON");
      }
  
      const data = await response.json();
      console.log("Fetched users:", data);
      return data;
    } catch (error) {
      console.error("Error fetching users:", error.message);
      return [];
    }
  };
  