import { ReactNode, useEffect, useState } from "react";
import debounce from "../lib/debounce";

interface AppBarProps {
  logo: ReactNode;
  nav?: ReactNode;
  settings?: ReactNode;
  actionButton?: ReactNode;
}

function AppBar({ logo, nav, settings, actionButton }: AppBarProps) {
  const [isStickied, setIsStickied] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 0) {
        setIsStickied(true);
      } else {
        setIsStickied(false);
      }
    }, 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center py-4 w-full sticky top-0 z-10 bg-background/70 backdrop-filter backdrop-blur-lg  firefox:bg-opacity-70 ${
        isStickied ? "border-b border-border" : ""
      } `}
    >
      <div className="flex  items-center first">{logo}</div>
      <div className="flex items-center first">{nav}</div>
      <div className="flex  items-center space-x-4">
        {settings}
        {actionButton}
      </div>
    </header>
  );
}

export default AppBar;
