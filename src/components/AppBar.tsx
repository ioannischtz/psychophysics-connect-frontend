import { ReactNode, useEffect, useState } from "react";
import debounce from "../lib/debounce";
import { Toggle } from "./ui/Toggle";
import { MenuIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/Dialog";
import { DialogClose } from "@radix-ui/react-dialog";

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
      className={`flex justify-between items-center px-2 py-4 w-full sticky top-0 z-10 bg-background/70 backdrop-filter backdrop-blur-lg  firefox:bg-opacity-70 ${
        isStickied
          ? "border-b border-border md:fixed md:w-screen md:-ml-32 md:px-32"
          : ""
      } `}
    >
      <div className="flex items-center first">{logo}</div>
      <div className="hidden text-center md:flex md:justify-center md:items-center">
        {nav}
      </div>
      <div className="hidden md:flex md:items-center space-x-4">
        {settings}
        {actionButton}
      </div>

      {/* Mobile menu content here */}
      <Dialog>
        <DialogTrigger asChild className="md:hidden">
          <Toggle variant="default">
            <MenuIcon />
          </Toggle>
        </DialogTrigger>
        <DialogContent className="min-h-[calc(100vh-2rem)] sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex items-center space-x-4 h-fit">{settings}</div>
          </DialogHeader>
          <DialogClose className="">{nav}</DialogClose>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default AppBar;
