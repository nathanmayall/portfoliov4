import { profile, skillGroups } from "./profile.ts";
import projects from "./projects/index.tsx";

// WebMCP tools for the portfolio, registered by islands/WebMCP.tsx.
// Spec: https://github.com/webmachinelearning/webmcp

// Minimal types until TypeScript's DOM lib includes WebMCP.
export interface ModelContextTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: object;
  annotations?: { readOnlyHint?: boolean; consequentialHint?: boolean };
  // deno-lint-ignore no-explicit-any
  execute: (input: any) => Promise<ToolResult> | ToolResult;
}
interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
}
export interface ModelContext {
  registerTool(
    tool: ModelContextTool,
    options?: { signal?: AbortSignal },
  ): Promise<void>;
}

const text = (value: unknown, isError = false): ToolResult => ({
  content: [{
    type: "text",
    text: typeof value === "string" ? value : JSON.stringify(value),
  }],
  isError,
});

const SECTIONS = {
  top: "title",
  expertise: "expertise",
  projects: "projects",
} as const;

export const tools: ModelContextTool[] = [
  {
    name: "get-profile",
    title: "Get profile",
    description:
      "Returns who owns this portfolio: name, role, email address and links to LinkedIn and GitHub.",
    annotations: { readOnlyHint: true },
    execute: () => text(profile),
  },
  {
    name: "list-skills",
    title: "List skills",
    description:
      "Lists the skills on this portfolio, grouped into design, languages and tools. Descriptions are in Nathan's own words.",
    annotations: { readOnlyHint: true },
    execute: () =>
      text(skillGroups.map(({ title, icons, description }) => ({
        group: title,
        highlights: icons.map((icon) => icon.name),
        description,
      }))),
  },
  {
    name: "list-projects",
    title: "List projects",
    description:
      "Lists past projects shown in this portfolio, each with a description and a link to its source code on GitHub. The live sites are no longer online.",
    annotations: { readOnlyHint: true },
    execute: () =>
      text(projects.map(({ name, description, repo }) => ({
        name,
        description,
        repo,
      }))),
  },
  {
    name: "scroll-to-section",
    title: "Scroll to section",
    description:
      "Scrolls the page so the user can see a section: the title card, the expertise cards, or the projects.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          enum: Object.keys(SECTIONS),
          description: "Which section to show.",
        },
      },
      required: ["section"],
    },
    execute: ({ section }: { section?: string }) => {
      const id = SECTIONS[section as keyof typeof SECTIONS];
      const element = id && document.getElementById(id);
      if (!element) {
        return text(
          `Unknown section "${section}". Use one of: ${
            Object.keys(SECTIONS).join(", ")
          }.`,
          true,
        );
      }
      element.scrollIntoView({ behavior: "smooth" });
      return text(`Scrolled to the ${section} section.`);
    },
  },
  {
    name: "compose-email",
    title: "Compose email to Nathan",
    description:
      "Opens the user's email app with a draft to Nathan. The user reviews and sends it themselves.",
    annotations: { consequentialHint: true },
    inputSchema: {
      type: "object",
      properties: {
        subject: { type: "string", description: "Email subject line." },
        message: { type: "string", description: "Body of the email." },
      },
      required: ["subject", "message"],
    },
    execute: ({ subject, message }: { subject?: string; message?: string }) => {
      if (!subject?.trim() || !message?.trim()) {
        return text("Both a subject and a message are required.", true);
      }
      location.href = `mailto:${profile.email}?subject=${
        encodeURIComponent(subject.slice(0, 200))
      }&body=${encodeURIComponent(message.slice(0, 5000))}`;
      return text(
        "Opened a draft email to Nathan. The user needs to review and send it.",
      );
    },
  },
];
