/** @jsx h */
import { h, Fragment } from "preact";

import ContactBox from "../components/ContactBox.tsx";
import Title from "../islands/Title.tsx";

import Body from "../components/Body.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <Fragment>
      <head>
        <title>Nathan {"Mayall's"} Portfolio. Hi!</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="theme-color"
          content="#297373"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#297373"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <Title />
      <Body />
      <Footer />
    </Fragment>
  );
}
