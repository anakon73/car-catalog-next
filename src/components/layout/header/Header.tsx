import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { pathname } = useRouter();

  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About Page",
    },
  ];

  return (
    <header className={styles.header}>
      {links.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          className={pathname === link.href ? styles.active : ""}
        >
          {link.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
