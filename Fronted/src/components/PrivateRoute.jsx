// components/PrivateRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/me", {
        withCredentials: true, // 👈 to send cookies
      })
      .then((res) => {
        setAuthenticated(true);
        setLoading(false);
      })
      .catch(() => {
        setAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
