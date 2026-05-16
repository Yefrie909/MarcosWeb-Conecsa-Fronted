import { Link } from "react-router";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-[#c41e3a] mb-8">
        Panel Administrativo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Productos */}
        <Link
          to="/admin/productos"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-[#c41e3a] mb-2">
            Productos
          </h2>

          <p className="text-gray-600">
            Administrar productos.
          </p>
        </Link>

        {/* Usuarios */}
        <Link
          to="/admin/usuarios"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-[#c41e3a] mb-2">
            Usuarios
          </h2>

          <p className="text-gray-600">
            Administrar usuarios.
          </p>
        </Link>

        {/* Pedidos */}
        <Link
          to="/admin/pedidos"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-[#c41e3a] mb-2">
            Pedidos
          </h2>

          <p className="text-gray-600">
            Administrar pedidos.
          </p>
        </Link>

      </div>
    </div>
  );
}