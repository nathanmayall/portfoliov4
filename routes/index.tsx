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
      </head>
      <Title />
      <Body />
      <Footer />
    </Fragment>
  );
}
