// Pinned so jsDelivr serves the icons with a year-long immutable cache.
// Bump the version here to update every icon at once.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons";

/** URL of a Devicon SVG, e.g. `devicon("go", "original-wordmark")`. */
export function devicon(name: string, variant = "original"): string {
  return `${DEVICON}/${name}/${name}-${variant}.svg`;
}
