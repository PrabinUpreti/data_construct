import { CrudTable } from "@/components/pages/CrudTable";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface ITitle {
  title: string;
}

export const Crud = ({ title }: ITitle) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  <Helmet>{`${title}`}</Helmet>;

  return <CrudTable />;
};
