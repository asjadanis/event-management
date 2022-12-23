import { ReactElement } from "react";

export type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children?: ReactElement[] | ReactElement;
};
