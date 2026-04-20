import API from "../api/axios";

export const getCurrentUser = async () => {
  const response = await API.get("/auth/me");
  return response.data.data; // ✅ IMPORTANT
};