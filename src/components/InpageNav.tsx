import { useState } from "react";

function InpageNav({ links }: { links: { href: string; text: string }[] }) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (href: string) => {
    // Set the active link to the clicked link's href
    setActiveLink(href);
  };

  return (
    <nav className="flex flex-col space-y-10 md:space-y-0 items-center font-roboto text-lg md:block  md:space-x-4">
      {links.map((link) => (
        <a
          href={link.href}
          className={`${
            activeLink === link.href
              ? "font-bold underline"
              : "focus:font-bold focus:underline"
          } text-2xl md:text-lg`}
          key={link.href}
          onClick={() => handleClick(link.href)}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default InpageNav;
