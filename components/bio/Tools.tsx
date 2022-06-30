/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Tools() {
  return (
    <div
      class={tw`p-8 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md`}
    >
      <h2 class={tw`text-2xl text-shadow-sm`}>Tools</h2>
      <div class={tw`flex justify-between mx-4 my-3 text-6xl`}>
        <i class="devicon-nodejs-plain colored" />
        <i class="devicon-webpack-plain colored" />
        <i class="devicon-kubernetes-plain colored" />
      </div>
      <p>
        Git, GitHub, Xen Orchestra, Virtualisation, WSL, Docker, Kubernetes...
        the list goes on.
      </p>
    </div>
  );
}
