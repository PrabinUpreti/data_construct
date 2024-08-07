import { useGetEmployeeQuery } from "@/api/crud";
import React from "react";

export const HomePage = () => {
  const { data } = useGetEmployeeQuery("");
  return <div className="container">HomePage</div>;
};
