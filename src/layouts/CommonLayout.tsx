import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import BreadCrumb from "@/components/custom/common/BreadCrumb";

export const CommonLayout = () => {
  return (
    <div className="">
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <Header />
        <div className="container">
          <BreadCrumb />
        </div>
        <br />
        <Outlet />
      </div>
    </div>
  );
};
