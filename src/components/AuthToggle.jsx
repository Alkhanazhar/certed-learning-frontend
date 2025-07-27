import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";

  const handleToggle = () => {
    navigate(isLogin ? "/register" : "/login");
  };

  return (
    <div className="text-center mt-4">
      <p className="text-sm text-muted-foreground">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
      </p>
      <Button
        variant="link"
        className="text-primary p-0 h-auto text-sm"
        onClick={handleToggle}
      >
        {isLogin ? "Register here" : "Login here"}
      </Button>
    </div>
  );
};

export default AuthToggle;
