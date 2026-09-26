export default function Tools() {
  return (
    <div class="p-6 duration-150 bg-white/40 rounded-lg shadow-lg w-96 backdrop-blur-xs hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Tools</h2>
      <div class="flex justify-between mx-1 my-1 text-6xl content-center">
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/nodejs/nodejs-original.svg"
          alt="Node.js logo"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/bun/bun-original.svg"
          alt="Bun logo"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/gitlab/gitlab-original.svg"
          alt="GitLab logo"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/kubernetes/kubernetes-original.svg"
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
