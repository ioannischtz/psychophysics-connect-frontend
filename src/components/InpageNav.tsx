function InpageNav({ links }: { links: { href: string; text: string }[] }) {
  return (
    <nav className="space-x-4 font-roboto text-lg">
      {links.map((link) => (
        <a
          href={link.href}
          className="focus:font-bold focus:underline focus:underline-offset-4"
          key={link.href}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default InpageNav;
