import WebMCP from "../islands/WebMCP.tsx";
import { define } from "../utils.ts";

// Chrome/Edge only expose WebMCP on origins enrolled in the origin trial. Set
// WEBMCP_ORIGIN_TRIAL_TOKEN in Deno Deploy to enable it on the live site.
const originTrialToken = Deno.env.get("WEBMCP_ORIGIN_TRIAL_TOKEN");

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nathan Mayall · Software Engineer</title>
        <meta
          name="description"
          content="Nathan Mayall is a software engineer working in Go, Rust and TypeScript, with a focus on DevOps, GitOps and CI/CD."
        />
        {originTrialToken && (
          <meta http-equiv="origin-trial" content={originTrialToken} />
        )}
        <meta
          name="theme-color"
          content="#297373"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0A3050"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <Component />
        <WebMCP />
      </body>
    </html>
  );
});
