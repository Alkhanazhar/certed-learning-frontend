import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

// components/AuthButton.j
const AuthButton = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return isLoggedIn ? (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Button asChild>
      <Link to="/login">Login</Link>
    </Button>
  );
};

export default AuthButton;
