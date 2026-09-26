import { devicon } from "./devicon.ts";

// Single source for the site's content: rendered by the page components and
// returned by the WebMCP tools in components/webmcp_tools.ts.

export const profile = {
  name: "Nathan Mayall",
  role: "Software Engineer",
  links: {
    linkedin: "https://www.linkedin.com/in/nathan-mayall-1a09a279",
    github: "https://github.com/nathanmayall",
  },
  email: "nathanmayall@icloud.com",
};

export interface SkillIcon {
  name: string;
  /** Image URL. Paths starting with "/" are files in static/. */
  src: string;
  /** Extra classes for the icon's wrapper, e.g. a white circle behind dark logos. */
  class?: string;
  /** Spin the icon on hover. */
  spin?: boolean;
}

export interface SkillGroup {
  title: string;
  icons: SkillIcon[];
  description: string;
  /** Optional closing line, rendered as `${text} <a>${label}</a>`. */
  link?: { text: string; label: string; href: string };
}

const onWhite = "bg-white rounded-full p-1 shadow-md";

export const skillGroups: SkillGroup[] = [
  {
    title: "Design",
    icons: [
      { name: "HTML5", src: devicon("html5", "original-wordmark") },
      { name: "Tailwind CSS", src: devicon("tailwindcss"), class: onWhite },
      { name: "React", src: devicon("react"), spin: true },
      { name: "Fresh", src: "/logo.svg" },
    ],
    description:
      "I've built sites and apps with Material Design, Tailwind CSS and other component libraries.",
    link: {
      text: "Check them out on my",
      label: "GitHub.",
      href: profile.links.github,
    },
  },
  {
    title: "Languages",
    icons: [
      { name: "Go", src: devicon("go", "original-wordmark"), class: onWhite },
      { name: "Rust", src: devicon("rust"), class: onWhite },
      { name: "Python", src: devicon("python"), class: onWhite },
      { name: "Bash", src: devicon("bash"), class: onWhite },
    ],
    description:
      "I mainly write Go, Rust and TypeScript, with Python and Bash for scripting. I also specialise in DevOps, GitOps and CI/CD.",
  },
  {
    title: "Tools",
    icons: [
      {
        name: "Claude",
        src: devicon("claude", "original", { unreleased: true }),
      },
      { name: "Bun", src: devicon("bun") },
      { name: "GitLab", src: devicon("gitlab") },
      { name: "Kubernetes", src: devicon("kubernetes") },
    ],
    description:
      "Claude, Bun, GitLab, Docker/Podman, Kubernetes, OpenShift, Xen Orchestra, WSL… the list goes on.",
  },
];
