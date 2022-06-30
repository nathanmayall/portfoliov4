/** @jsx h */
import { h } from "preact";

import { tw } from "@twind";

export default function Languages() {
  return (
    <div
      class={tw`p-8 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md`}
    >
      <h2 class={tw`text-2xl text-shadow-sm`}>Languages</h2>
      <div class={tw`flex justify-between mx-4 my-3 text-6xl`}>
        <i class="devicon-javascript-plain colored" />
        <i class="devicon-postgresql-plain colored" />
        <i class="devicon-typescript-plain colored" />
      </div>
      <p>
        My main development languages are Javascript, Typescript, HTML, CSS etc.
        I also know SQL syntax as I do both front-end and back-end work.
      </p>
    </div>
  );
}
