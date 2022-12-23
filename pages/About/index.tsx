import { FC, ReactElement } from "react";
import Layout from "../../components/Layout";

const AboutPage: FC = (): ReactElement => {
  return (
    <Layout title="About Events">
      <h1>About</h1>
      <p>This is an app to find the latest events happening around</p>
      <p>Version 1.0.0 </p>
    </Layout>
  );
};

export default AboutPage;
