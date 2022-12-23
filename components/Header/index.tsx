import Link from "next/link";
import { FC, ReactElement } from "react";
import styles from "./Header.module.css";

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Home</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={"/Events"}>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
