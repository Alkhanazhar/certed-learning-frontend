// src/hooks/useLogin.js
import { useAuth } from "@/context/AuthContext";
import apiClient from "../../apiClient";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: tokenStore } = useAuth();

  const login = async ({ email, password }) => {
    console.log(email);
    setLoading(true);
    try {
      const res = await apiClient.post("/auth/login", { email, password });
      console.log(res, "res");

      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      toast.success(res.data.message); // Use toast if preferred
      tokenStore(res.data.data.token, res.data.data.user);
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message); // Use toast if preferred
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
