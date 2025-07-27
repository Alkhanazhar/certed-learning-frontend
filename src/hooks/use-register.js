// src/hooks/useRegister.js
import apiClient from "../../apiClient";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async ({ name, email, password }) => {
    setLoading(true);
    try {
      const res = await apiClient.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log(res, "res");
      localStorage.setItem("token", res.data.token);
      navigate("/login"); // Or wherever you want
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading };
};

export default useRegister;
