export default function Tools() {
  return (
    <div class="p-6 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Tools</h2>
      <div class="flex justify-between mx-1 my-1 text-6xl content-center">
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
        />
      </div>
      <p>
        Git, Xen Orchestra, Virtualisation, WSL, Docker/Podman, Kubernetes,
        OpenShift... the list goes on.
      </p>
    </div>
  );
}
