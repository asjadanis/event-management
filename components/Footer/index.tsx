import Link from "next/link";
import { FC, ReactElement } from "react";
import styles from "./Footer.module.css";

const Footer: FC = (): ReactElement => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Events {year}</p>
      <p>
        <Link href="/About">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
