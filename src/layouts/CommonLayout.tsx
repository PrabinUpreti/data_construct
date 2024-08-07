import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

export const CommonLayout = () => {
  return (
    <div className="">
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
