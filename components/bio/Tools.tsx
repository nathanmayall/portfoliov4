import { devicon } from "../devicon.ts";

export default function Tools() {
  return (
    <div class="p-6 duration-150 bg-white/40 rounded-lg shadow-lg w-96 backdrop-blur-xs hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Tools</h2>
      <div class="flex justify-between mx-1 my-1 text-6xl content-center">
        <img
          class="w-16 h-16"
          src={devicon("nodejs")}
          alt="Node.js logo"
        />
        <img
          class="w-16 h-16"
          src={devicon("bun")}
          alt="Bun logo"
        />
        <img
          class="w-16 h-16"
          src={devicon("gitlab")}
          alt="GitLab logo"
        />
        <img
          class="w-16 h-16"
          src={devicon("kubernetes")}
          alt="Kubernetes logo"
        />
      </div>
      <p>
        Git, Xen Orchestra, Virtualisation, WSL, Docker/Podman, Kubernetes,
        OpenShift... the list goes on.
      </p>
    </div>
  );
}
