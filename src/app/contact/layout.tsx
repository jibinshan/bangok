import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Bangkok Steak House | Woolton Village's Premier Steak House",
  description:
    "Get in touch with Bangkok Steak House for reservations, private events, or inquiries. Located in Woolton Village, Liverpool, Bangkok offers an extraordinary dining experience for every occasion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Bangkok Steak House, reservations Liverpool, private dining Woolton Village, best steak house Liverpool, Bangkok restaurant location, group dining Liverpool, steak reservations",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
