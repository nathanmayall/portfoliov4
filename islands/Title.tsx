/** @jsx h */

import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { useMediaQuery } from "../utils/mediaquery.ts";

import { tw } from "@twind";

import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min.js";

import ContactBox from "../components/ContactBox.tsx";

export default function Title() {
  const [vantaEffect, setVantaEffect] = useState<unknown>(0);
  const myRef = useRef(null);

  const vantaColour = useMediaQuery(
    "(prefers-color-scheme: dark)",
    0xa3050,
    0x5588
  );

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE,
          backgroundAlpha: 0.0,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          waveSpeed: 0.3,
          color: vantaColour,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    setVantaEffect((prev) => {
      prev.setOptions({ color: vantaColour });
    });
  }, [vantaColour]);

  return (
    <div ref={myRef} class={tw`h-screen min-w-full bg-[#5588]`}>
      <ContactBox />
    </div>
  );
}
