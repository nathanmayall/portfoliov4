import Icons from "../components/Icons.tsx";

export default function Title() {
  return (
    <div class="bg-texture">
      <div class="flex items-center justify-center h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-gray-900">
        <div class="py-4 text-center text-gray-700 duration-150 bg-white rounded-lg shadow-lg w-80 md:w-auto md:p-10 md:m-auto backdrop-filter backdrop-blur-sm dark:text-gray-300 hover:shadow-2xl hover:backdrop-blur-md bg-opacity-10">
          <h1 class="text-6xl font-thin tracking-wider text-shadow-lg">
            Nathan Mayall
          </h1>
          <p class="my-6 tracking-wide">
            <code>Software Engineer</code>
          </p>
          <Icons />
        </div>
      </div>
    </div>
  );
}
