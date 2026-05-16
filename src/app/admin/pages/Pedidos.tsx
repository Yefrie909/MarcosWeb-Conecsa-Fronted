import { ShoppingCart } from "lucide-react";

export function Pedidos() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Título */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#c41e3a]">
          Pedidos
        </h1>

        <p className="text-gray-600 mt-2">
          Gestión de pedidos realizados por clientes.
        </p>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-[#c41e3a]" />
            Lista de Pedidos
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Cliente</th>
              <th className="text-left p-4">Producto</th>
              <th className="text-left p-4">Cantidad</th>
              <th className="text-left p-4">Estado</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">Juan Pérez</td>
              <td className="p-4">Tubo PVC</td>
              <td className="p-4">15</td>
              <td className="p-4 text-green-600 font-semibold">
                Entregado
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">Carlos Gómez</td>
              <td className="p-4">Cemento Sol</td>
              <td className="p-4">50</td>
              <td className="p-4 text-orange-500 font-semibold">
                Pendiente
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
}