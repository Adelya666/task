import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../../auth/SignIn";
import SignUp from "../../auth/SignUp";
import NotFound from "../../not found/NotFound";

const Public = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Navigate replace to="/signin" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Public;
