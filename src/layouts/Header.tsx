import { ThemeMenu } from "@/components/custom/common/ThemeMenu";
import { useTheme } from "@/components/providers/Theme/ThemeProvider";

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <div className="flex justify-end items-center px-12  h-5 mb-5">
      <ThemeMenu props={theme} />
    </div>
  );
};

export default Header;
