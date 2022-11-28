import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { client } from "./lib/apollo";
import { HEADER_FOOTER_INFO } from "./queries";
import styles from "./styles/tailwind.css";
import { MenuItem, SocialAccount } from "./types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faLinkedinIn,
  faYoutube
);

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Adam Rasheed",
  description:
    "Adam Rasheed is a Los Angeles based frontend software engineer specializing in enterprise software apps.",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader() {
  const { data } = await client.query({ query: HEADER_FOOTER_INFO });

  const menuItems: MenuItem[] = data?.menuItems?.nodes || [];
  const socialAccounts = data?.siteOptions?.options?.socialAccounts || [];
  const resume = data?.siteOptions?.options?.resume;

  return { menuItems, socialAccounts, resume };
}

type RootType = {
  menuItems: MenuItem[];
  socialAccounts: SocialAccount[];
  resume?: string;
};

export default function App() {
  const { menuItems, socialAccounts, resume } = useLoaderData<RootType>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col items-stretch justify-start min-h-screen dark:bg-slate-900 dark:text-slate-300">
        <Header menuItems={menuItems} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer socialAccounts={socialAccounts} resume={resume} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
