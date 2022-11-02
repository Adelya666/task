import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserDetail from "../../users/UserDetail";
import UserList from "../../users/UserList";
import Logout from "../../auth/Logout";
import NotFound from "../../not found/NotFound";

const Private = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="/signin" element={<Navigate replace to="/users" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Private;
