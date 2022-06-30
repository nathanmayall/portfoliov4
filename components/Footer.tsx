/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  return (
    <div
      class={tw`flex items-center justify-center w-auto h-12 text-center text-gray-300 shadow-inner cursor-default text-shadow-sm bg-Skobeloff`}
    >
      <p>
        Made with <span class={tw`hover:animate-pulse`}>❤</span> by Nathan
        Mayall
      </p>
    </div>
  );
}
