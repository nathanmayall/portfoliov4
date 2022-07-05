/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

import Icons from "./Icons.tsx";

export default function ContactBox() {
  return (
    <div
      class={tw`flex items-center justify-center h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900`}
    >
      <div
        class={tw`py-4 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg w-80 md:w-auto md:p-10 md:m-auto backdrop-filter backdrop-blur-sm dark:text-gray-300 hover:shadow-2xl hover:backdrop-blur-md bg-opacity-10`}
      >
        <h1 class={tw`text-6xl font-thin tracking-wider text-shadow-lg`}>
          Nathan Mayall
        </h1>
        <p class={tw`my-6 tracking-wide`}>
          <code>Software Engineer</code>
        </p>
        <Icons />
      </div>
    </div>
  );
}
