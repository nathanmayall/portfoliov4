import { assert, assertEquals, assertStringIncludes } from "@std/assert";
import { tools } from "./webmcp_tools.ts";

const tool = (name: string) => {
  const found = tools.find((t) => t.name === name);
  assert(found, `missing tool ${name}`);
  return found;
};
const run = async (name: string, input: unknown = {}) => {
  const result = await tool(name).execute(input);
  return { ...result, text: result.content[0].text };
};

Deno.test("tool names are unique and every tool has a description", () => {
  assertEquals(new Set(tools.map((t) => t.name)).size, tools.length);
  for (const t of tools) assert(t.description.length > 20, t.name);
});

Deno.test("read-only tools return JSON", async () => {
  assertEquals(
    JSON.parse((await run("get-profile")).text).name,
    "Nathan Mayall",
  );
  assertEquals(
    JSON.parse((await run("list-skills")).text).map((g: { group: string }) =>
      g.group
    ),
    ["Design", "Languages", "Tools"],
  );
  const projects = JSON.parse((await run("list-projects")).text);
  assertEquals(projects.length, 3);
  assert(
    projects.every((p: { repo?: string }) =>
      p.repo?.startsWith("https://github.com/")
    ),
  );
});

Deno.test("scroll-to-section scrolls known sections and rejects others", async () => {
  const scrolled: string[] = [];
  Object.assign(globalThis, {
    document: {
      getElementById: (id: string) => ({
        scrollIntoView: () => scrolled.push(id),
      }),
    },
  });
  assertEquals(
    (await run("scroll-to-section", { section: "projects" })).isError,
    false,
  );
  assertEquals(scrolled, ["projects"]);
  const bad = await run("scroll-to-section", { section: "footer" });
  assertEquals(bad.isError, true);
  assertStringIncludes(bad.text, "top, expertise, projects");
});

Deno.test("compose-email opens an encoded mailto link", async () => {
  const location = { href: "" };
  Object.assign(globalThis, { location });
  assertEquals(
    (await run("compose-email", { subject: "", message: "hi" })).isError,
    true,
  );
  assertEquals(location.href, "");
  await run("compose-email", {
    subject: "Hi & hello",
    message: "Line 1\nLine 2",
  });
  assertEquals(
    location.href,
    "mailto:nathanmayall@icloud.com?subject=Hi%20%26%20hello&body=Line%201%0ALine%202",
  );
});
