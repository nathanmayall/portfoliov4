export default function Languages() {
  return (
    <div class="p-6 duration-150 bg-white/40 rounded-lg shadow-lg w-96 backdrop-blur-xs hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Languages</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl content-center">
        <img
          class="w-16 h-16 bg-white rounded-full p-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/go/go-original-wordmark.svg"
          alt="Go logo"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/rust/rust-original.svg"
          alt="Rust logo"
        />
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/typescript/typescript-original.svg"
          alt="TypeScript logo"
        />
      </div>
      <p>
        My main development languages are Golang, Rust & TypeScript. I also
        specialise in DevOps, GitOps & CI/CD.
      </p>
    </div>
  );
}
