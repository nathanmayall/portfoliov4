import SkillCard from "./bio/SkillCard.tsx";
import { skillGroups } from "./profile.ts";
import Links from "./Links.tsx";

export default function Body() {
  return (
    <div
      id="expertise"
      class="w-auto h-auto pb-5 bg-center bg-cover md:pb-0 dark:bg-dark-bio-image bg-bio-image"
    >
      <div class="bg-linear-to-b to-transparent from-white dark:from-gray-900">
        <div class="text-center text-gray-700 dark:text-gray-300">
          <h1 class="mb-2 text-6xl text-shadow-md">My Expertise</h1>
          <p class="px-2 mb-3">
            I&apos;m a software engineer. Here&apos;s what I work with, and some
            things I&apos;ve built.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 m-auto text-center text-gray-700 w-80 md:w-auto dark:text-gray-200">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
          <Links />
        </div>
      </div>
    </div>
  );
}
