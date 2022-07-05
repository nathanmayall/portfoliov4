/** @jsx h */

import { h, Fragment } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import { tw } from "@twind";
import WAVES from "vanta/dist/vanta.waves.min.js";

import Icons from "../components/Icons.tsx";

export default function Title() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          backgroundAlpha: 0.0,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          waveSpeed: 0.3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Fragment>
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </head>
      {IS_BROWSER && (
        <div
          class={tw`h-screen min-w-full bg-gradient-to-b from-transparent to-white dark:to-gray-900`}
        >
          <div ref={myRef} class={tw`h-screen min-w-full`}>
            <div class={tw`flex items-center justify-center h-screen`}>
              <div
                class={tw`py-4 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg w-80 md:w-auto md:p-10 md:m-auto backdrop-filter backdrop-blur-sm dark:text-gray-300 hover:shadow-2xl hover:backdrop-blur-md bg-opacity-10`}
              >
                <h1
                  class={tw`text-6xl font-thin tracking-wider text-shadow-lg`}
                >
                  Nathan Mayall
                </h1>
                <p class={tw`my-6 tracking-wide`}>
                  <code>Software Engineer</code>
                </p>
                <Icons />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
