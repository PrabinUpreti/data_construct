import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useTheme } from "./components/providers/Theme/ThemeProvider";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const t = useTheme();
  useEffect(() => {
    console.log("i am called", t);
    t.setTheme("dark");
    toast("COMPONENT DID MOUNT");
  }, []);
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </>
  );
}

export default App;
