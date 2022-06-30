/** @jsx h */

import { h } from "preact";

import { tw } from "@twind";

export default function Icons() {
  return (
    <div class={tw`flex justify-center mt-6 space-x-6`}>
      <a
        href="https://www.linkedin.com/in/nathan-mayall-1a09a279"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class={tw`text-6xl duration-150 hover:text-indigo-900 dark:hover:text-indigo-300`}
        >
          <i class="devicon-linkedin-plain" />
        </div>
      </a>
      <a
        href="mailto:nathanmayall@icloud.com?subject=I've seen your portfolio and..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class={tw`text-6xl duration-150 hover:text-indigo-900 dark:hover:text-indigo-300`}
        >
          <i class="devicon-slack-plain" />
        </div>
      </a>
      <a
        href="https://github.com/nathanmayall"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class={tw`text-6xl duration-150 hover:text-indigo-900 dark:hover:text-indigo-300`}
        >
          <i class="devicon-github-original" />
        </div>
      </a>
    </div>
  );
}
