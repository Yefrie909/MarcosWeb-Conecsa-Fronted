import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl text-[#c41e3a] mb-4">404</h1>
        <h2 className="text-3xl mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#c41e3a] text-white px-6 py-3 rounded-md hover:bg-[#a01830] transition"
          >
            <Home className="w-5 h-5" />
            Ir al Inicio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver Atrás
          </button>
        </div>
      </div>
    </div>
  );
}
