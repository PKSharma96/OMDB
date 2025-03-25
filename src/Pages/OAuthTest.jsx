import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export const OAuthTest = () => {
  return (
    <GoogleOAuthProvider clientId="193480720161-cuue15m8dtb8804n894jef55necrre2t.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(response) => {
          console.log("Login Success:", response);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

