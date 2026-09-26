import { asset } from "fresh/runtime";
import type { SkillGroup } from "../profile.ts";

export default function SkillCard(
  { group: { title, icons, description, link } }: { group: SkillGroup },
) {
  return (
    <div class="p-6 glass glass-tint rounded-2xl w-96">
      <h2 class="text-2xl text-shadow-sm">{title}</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl content-center">
        {icons.map((icon) => (
          // The wrapper holds any backdrop (e.g. the white circle) so the
          // drop shadow follows the logo's own outline.
          <div
            key={icon.name}
            class={[
              "size-12 sm:size-16",
              icon.class,
              icon.spin && "hover:animate-spin",
            ].filter(Boolean).join(" ")}
          >
            <img
              class="size-full drop-shadow-[0_1px_1.5px_rgb(0_0_0/0.45)]"
              src={icon.src.startsWith("/") ? asset(icon.src) : icon.src}
              alt={`${icon.name} logo`}
            />
          </div>
        ))}
      </div>
      <p>{description}</p>
      {link && (
        <p>
          {link.text}{" "}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="duration-150 dark:hover:text-gray-700 hover:text-gray-400"
          >
            {link.label}
          </a>
        </p>
      )}
    </div>
  );
}
