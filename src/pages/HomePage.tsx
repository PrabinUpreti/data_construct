import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface ITitle {
  title: string;
}

export const HomePage = ({ title }: ITitle) => {
  useEffect(() => {
    document.title = `${title}`;
  }, []);

  <Helmet>{`${title}`}</Helmet>;

  return <div className="container">HomePage</div>;
};
