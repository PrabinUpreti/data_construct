import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface ITitle {
  title: string;
}

export const Welcome = ({ title }: ITitle) => {
  useEffect(() => {
    document.title = `${title}`;
  }, []);

  <Helmet>{`${title}`}</Helmet>;

  return (
    <div className="containsser">
      <iframe
        className="w-full h-screen"
        src="https://dataconstruct.com.np/"
      ></iframe>
    </div>
  );
};

export default Welcome;
