import { useEffect } from "preact/hooks";
import { type ModelContext, tools } from "../components/webmcp_tools.ts";

// Exposes the portfolio to in-browser AI agents via WebMCP. Browsers without
// WebMCP skip registration. Test locally in Chrome with
// chrome://flags/#enable-webmcp-testing.
export default function WebMCP() {
  useEffect(() => {
    const modelContext = (document as { modelContext?: ModelContext })
      .modelContext;
    if (!modelContext) return;

    const controller = new AbortController();
    for (const tool of tools) {
      modelContext.registerTool(tool, { signal: controller.signal }).catch(
        (error) =>
          console.warn(`WebMCP: couldn't register ${tool.name}`, error),
      );
    }
    return () => controller.abort();
  }, []);

  return null;
}
