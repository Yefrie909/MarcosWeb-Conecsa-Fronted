import { Briefcase, MapPin, Clock, Calendar, FileUser } from "lucide-react";
import { useState } from "react";

export function BolsadeTrabajo() {
  const [cvSubmitted, setCvSubmitted] = useState(false);

  // Lista de vacantes de ejemplo orientadas a tu rubro de negocio
  const empleos = [
    {
      id: 1,
      puesto: "Técnico Operario de Saneamiento y Redes",
      area: "Operaciones / Campo",
      ubicación: "Huancayo, Junín",
      tipo: "Tiempo Completo",
      fecha: "Publicado hace 2 días",
      descripcion: "Se solicita técnico con experiencia en instalación de tuberías de alta presión, tendido de redes de agua potable y conexiones domiciliarias."
    },
    {
      id: 2,
      puesto: "Ingeniero Supervisor de Obras Hidráulicas",
      area: "Ingeniería / Proyectos",
      ubicación: "Huancayo, Junín",
      tipo: "Tiempo Completo",
      fecha: "Publicado hace 5 días",
      descripcion: "Buscamos Ingeniero Civil o Sanitario colegiado para supervisión de proyectos de infraestructura de saneamiento y control de calidad de materiales."
    },
    {
      id: 3,
      puesto: "Asesor Comercial de Ventas Corporativas",
      area: "Ventas / Comercial",
      ubicación: "Huancayo (Oficina)",
      tipo: "Tiempo Completo",
      fecha: "Publicado hace 1 semana",
      descripcion: "Responsable de la captación y atención de clientes institucionales, constructoras y consorcios para la venta de soluciones de saneamiento al por mayor."
    }
  ];

  const handleCvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCvSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Superior */}
      <div className="bg-[#4682B4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Bolsa de Trabajo</h1>
          <p className="text-xl opacity-90">¡Únete a nuestro equipo y sé parte del crecimiento en proyectos de infraestructura!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Listado de Ofertas Laborales */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#4682B4]" /> Vacantes Disponibles
            </h2>

            {empleos.map((empleo) => (
              <div key={empleo.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{empleo.puesto}</h3>
                    <p className="text-sm font-medium text-[#4682B4]">{empleo.area}</p>
                  </div>
                  <span className="self-start sm:self-center bg-blue-50 text-[#4682B4] px-3 py-1 rounded-full text-xs font-semibold">
                    {empleo.tipo}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{empleo.descripcion}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-50">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" /> {empleo.ubicación}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-gray-400" /> {empleo.fecha}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Formulario de Envío de CV Espontáneo */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#4682B4] sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FileUser className="w-5 h-5 text-[#4682B4]" /> Envíanos tu CV
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                ¿No encuentras una vacante que se ajuste a tu perfil? Déjanos tus datos para futuras convocatorias.
              </p>

              {cvSubmitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-md text-center text-sm font-medium border border-green-200">
                  ¡Gracias! Hemos recibido tus datos. Te tendremos en cuenta para los próximos procesos de selección.
                </div>
              ) : (
                <form onSubmit={handleCvSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4682B4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4682B4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Teléfono *</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4682B4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Área de Interés</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4682B4]">
                      <option>Operaciones y Obras</option>
                      <option>Ingeniería y Proyectos</option>
                      <option>Ventas y Comercial</option>
                      <option>Administración</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4682B4] text-white py-2 rounded-md hover:bg-[#36648B] transition text-sm font-medium mt-2"
                  >
                    Enviar Currículum
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}