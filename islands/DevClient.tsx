// Fresh only loads its client script when a page renders an island, and this
// site has none, so Vite's HMR client never loads in dev. _app.tsx renders this
// empty island in dev only; production still ships no JavaScript.
export default function DevClient() {
  return null;
}
