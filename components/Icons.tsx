import { devicon } from "./devicon.ts";
import { profile } from "./profile.ts";

// Devicon has no email icon, so this is Bootstrap Icons' envelope-fill (MIT),
// drawn to match the GitHub logo.
const ENVELOPE =
  "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z";

// Explicit sizes stop the icons shifting the layout while they load.
const iconClass = "block size-16 transition duration-150 hover:scale-110";

export default function Icons() {
  return (
    <div class="flex justify-center mt-6 space-x-6">
      <a
        href={`mailto:${profile.email}?subject=I've seen your portfolio and...`}
        aria-label="Email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 26 26"
          class={`${iconClass} bg-white rounded-full`}
          aria-hidden="true"
        >
          <path fill="#181616" d={ENVELOPE} />
        </svg>
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class={iconClass}
          src={devicon("linkedin")}
          width={64}
          height={64}
          alt="LinkedIn"
        />
      </a>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class={`${iconClass} bg-white rounded-full p-1`}
          src={devicon("github")}
          width={64}
          height={64}
          alt="GitHub"
        />
      </a>
    </div>
  );
}
