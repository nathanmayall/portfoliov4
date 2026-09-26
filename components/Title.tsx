import Icons from "./Icons.tsx";
import { profile } from "./profile.ts";

export default function Title() {
  return (
    <div id="title" class="bg-texture">
      <div class="flex items-center justify-center h-screen bg-linear-to-b from-transparent via-transparent to-white dark:to-gray-900">
        <div class="py-4 text-center text-gray-700 glass rounded-2xl w-80 md:w-auto md:p-10 md:m-auto dark:text-gray-300">
          <h1 class="text-6xl font-thin tracking-wider text-shadow-lg">
            {profile.name}
          </h1>
          <p class="my-6 tracking-wide">
            <code>{profile.role}</code>
          </p>
          <Icons />
        </div>
      </div>
    </div>
  );
}
