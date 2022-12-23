import Head from "next/head";
import { FC, ReactElement } from "react";
import { LayoutProps } from "./types";

import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout: FC<LayoutProps> = ({
  title = "Events | Find the hottest events near you",
  description = "Find the latest and hottest events",
  children,
  keywords = "music, sports, dj, events"
}): ReactElement => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
