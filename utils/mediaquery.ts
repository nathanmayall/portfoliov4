import { useState, useEffect } from "preact/hooks";

export const useMediaQuery = (
  query: string,
  whenTrue: string | number,
  whenFalse: string | number
) => {
  if (
    typeof globalThis === "undefined" ||
    typeof globalThis.matchMedia === "undefined"
  )
    return whenFalse;

  const mediaQuery = globalThis.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return match ? whenTrue : whenFalse;
};
