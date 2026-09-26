import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function ErrorPage({ error }) {
  const notFound = error instanceof HttpError && error.status === 404;
  const title = notFound ? "404 - Page not found" : "Something went wrong";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div class="px-4 py-8 mx-auto h-screen bg-[#86efac]">
        <div class="max-w-3xl mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">{title}</h1>
          <p class="my-4">
            {notFound
              ? "The page you were looking for doesn't exist."
              : "Please try again later."}
          </p>
          <a href="/" class="underline">
            Go back home
          </a>
        </div>
      </div>
    </>
  );
});
