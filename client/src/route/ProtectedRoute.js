import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";

export default function ProtectedRoute() {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Login />;
}
