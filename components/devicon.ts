// Pinned so jsDelivr serves the icons with a year-long immutable cache.
// Bump the version here to update every icon at once.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons";

// Icons merged into Devicon's develop branch but not released yet (claude),
// pinned to a commit so they're cached as immutably as a release. Drop this
// once they ship in a release.
const DEVICON_UNRELEASED =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@ee3eceb7c6a16b3e7b84d46ac97e7b7b561efe0c/icons";

/** URL of a Devicon SVG, e.g. `devicon("go", "original-wordmark")`. */
export function devicon(
  name: string,
  variant = "original",
  { unreleased = false } = {},
): string {
  const base = unreleased ? DEVICON_UNRELEASED : DEVICON;
  return `${base}/${name}/${name}-${variant}.svg`;
}
