import { useState } from "react";

function InpageNav({ links }: { links: { href: string; text: string }[] }) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (href: string) => {
    // Set the active link to the clicked link's href
    setActiveLink(href);
  };

  return (
    <nav className="space-x-4 font-roboto text-lg">
      {links.map((link) => (
        <a
          href={link.href}
          className={`${
            activeLink === link.href
              ? "font-bold underline"
              : "focus:font-bold focus:underline"
          }`}
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
