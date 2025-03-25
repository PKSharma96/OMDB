import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const SocialLogin = () => {
  const handleSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log("User Info:", decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    localStorage.setItem("token", token);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Google OAuth Login</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </div>
  );
};
