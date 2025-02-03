export default function Languages() {
  return (
    <div class="p-6 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Languages</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl content-center">
        <img
          class="w-16 h-16 bg-white rounded-full p-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />
      </div>
      <p>
        My main development languages are Golang, Rust & TypeScript. I also
        specialise in DevOps, GitOps & CI/CD.
      </p>
    </div>
  );
}
