// utils/auth.js or any helper file
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  // You can also redirect if needed:
  //   window.location.href = "/login"; // Or use useNavigate from React Router
};
