import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Bangkok Steak House | Premium Steak Experience in Liverpool",
  description:
    "Learn about Bangkok Steak House's journey from a small eatery to a celebrated dining destination in Liverpool. With a focus on quality, sustainability, and an unforgettable atmosphere, Bangkok brings culinary artistry to every plate.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "Bangkok Steak House Liverpool, best steak Woolton Village, sustainable dining, fine dining Liverpool, about Bangkok, premium beef cuts, chef-selected steaks, dining experience Liverpool",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
