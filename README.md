# portfoliov6

Nathan Mayall's portfolio, built with [Fresh 2](https://fresh.deno.dev), Preact
and Tailwind CSS 4.

## Usage

Install [Deno](https://docs.deno.com/runtime/getting_started/installation/),
then:

```sh
deno install     # install dependencies
deno task dev    # start the dev server with hot reload
deno task check  # format, lint and type check
deno task build  # production build into _fresh/
deno task start  # serve the production build
```

## Deployment

Deployed on [Deno Deploy](https://deno.com/deploy), linked to this GitHub repo
with the Fresh preset. Pushes to `master` go to production and pull requests get
preview deployments. Deno Deploy runs `deno task build` and serves the generated
`_fresh/server.js`.

`.github/workflows/ci.yml` runs `deno task check` and a build on every push and
pull request.
