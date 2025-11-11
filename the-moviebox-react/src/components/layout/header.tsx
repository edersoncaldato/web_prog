export function Header() {
  return (
    <header className="px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          <span className="font-normal">THE</span>MOVIEBOX
        </h1>
        <div className="flex gap-4">
          <a
            className="text-white text-sm py-2 px-4 border border-[#333] rounded transition hover:bg-[#333]"
            href="#"
          >
            Sign In
          </a>
          <a
            className="text-white text-sm py-2 px-4 border border-[#e50914] rounded transition bg-[#e50914] hover:bg-[#b8070f]"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
