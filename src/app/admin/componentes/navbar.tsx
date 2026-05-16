export function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold text-[#c41e3a]">
        Panel Administrativo
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#c41e3a] rounded-full flex items-center justify-center text-white">
          A
        </div>

        <span className="font-semibold">
          Admin
        </span>
      </div>

    </header>
  );
}