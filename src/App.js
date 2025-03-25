import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import { List } from "./Pages/List";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { SocialLogin } from "./Pages/SocialLogin";
import { Dashboard } from "./Pages/Dashboard";
import { ProtectedRoute } from "./Utils/ProtectedRoute";
function App() {
  return (
    <GoogleOAuthProvider clientId="193480720161-l36phbou58l1852jh5l2otdf36fi3rtp.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/googleLogin" element={<SocialLogin />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
