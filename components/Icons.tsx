import type { ComponentChildren } from "preact";

// Inline SVGs render with the HTML at a fixed size, so the icons don't shift
// the layout while an icon font loads.
const links: {
  label: string;
  href: string;
  external: boolean;
  viewBox: string;
  icon: ComponentChildren;
}[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathan-mayall-1a09a279",
    external: true,
    // Devicon linkedin-plain (MIT)
    viewBox: "0 0 128 128",
    icon: (
      <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z" />
    ),
  },
  {
    label: "Email",
    href:
      "mailto:nathanmayall@icloud.com?subject=I've seen your portfolio and...",
    external: false,
    // Material Symbols mail, rounded, filled (Apache 2.0), cropped to the glyph
    viewBox: "80 -800 800 640",
    icon: (
      <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm348.5-309.5q3.5-1.5 7.5-3.5l314-205q5-3 7.5-8t2.5-11q0-13-11.5-20.5t-23.5.5L480-522 176-717q-12-8-24-1t-12 20q0 6 3 11.5t7 8.5l314 205q4 2 7.5 3.5t8.5 1.5q5 0 8.5-1.5Z" />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/nathanmayall",
    external: true,
    // Devicon github-original (MIT)
    viewBox: "0 0 128 128",
    icon: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
      />
    ),
  },
];

export default function Icons() {
  return (
    <div class="flex justify-center mt-6 space-x-6">
      {links.map(({ label, href, external, viewBox, icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          class="duration-150 hover:text-indigo-900 dark:hover:text-indigo-300"
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill="currentColor"
            class="size-15"
            aria-hidden="true"
          >
            {icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
