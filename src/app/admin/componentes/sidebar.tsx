import { Link } from "react-router";

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#c41e3a] text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        CONECSA
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/admin/dashboard"
          className="hover:bg-white hover:text-[#c41e3a] p-3 rounded-lg transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/productos"
          className="hover:bg-white hover:text-[#c41e3a] p-3 rounded-lg transition"
        >
          Productos
        </Link>

        <Link
          to="/admin/usuarios"
          className="hover:bg-white hover:text-[#c41e3a] p-3 rounded-lg transition"
        >
          Usuarios
        </Link>

        <Link
          to="/admin/pedidos"
          className="hover:bg-white hover:text-[#c41e3a] p-3 rounded-lg transition"
        >
          Pedidos
        </Link>

      </nav>
    </aside>
  );
}