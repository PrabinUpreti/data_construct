import { EmployeeTable } from "@/components/pages/EmployeeTable";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface ITitle {
  title: string;
}

export const CreatePage = ({ title }: ITitle) => {
  useEffect(() => {
    document.title = `${title}`;
  }, []);

  <Helmet>{`${title}`}</Helmet>;

  return <EmployeeTable />;
};
