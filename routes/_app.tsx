import DevClient from "../islands/DevClient.tsx";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nathan Mayall's Portfolio. Hi!</title>
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
        {import.meta.env.DEV && <DevClient />}
      </body>
    </html>
  );
});
