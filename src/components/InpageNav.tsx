import { useState } from "react";
import { Link } from "react-router-dom";

function InpageNav({ links }: { links: { href: string; text: string }[] }) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (href: string) => {
    // Set the active link to the clicked link's href
    setActiveLink(href);
  };

  return (
    <nav className="flex flex-col space-y-10 md:space-y-0 items-center font-roboto text-lg md:block  md:space-x-4">
      {links.map((link) => (
        <Link
          to={link.href}
          className={activeLink === link.href
            ? "font-bold underline text-2xl md:text-lg"
            : "focus:font-bold focus:underline text-2xl md:text-lg"}
          key={link.href}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default InpageNav;
