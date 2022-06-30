/** @jsx h */

import { h, Fragment } from "preact";
import { useCallback } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import { tw } from "@twind";

import { loadFull } from "tsparticles";
import Particles from "preact-particles";
import particleOptions from "../components/particleOptions.tsx";
import type { Engine } from "tsparticles-engine";

import Icons from "../components/Icons.tsx";

export default function Title() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Fragment>
      <div class={tw`absolute h-screen min-w-full dark:bg-gray-900`} />
      {IS_BROWSER && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
          className={tw`absolute h-screen min-w-full`}
        />
      )}
      <div class={tw`relative flex items-center justify-center h-screen`}>
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
    </Fragment>
  );
}
