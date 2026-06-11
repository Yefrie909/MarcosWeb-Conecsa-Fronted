import { ShieldCheck, Truck, Percent, Building2, Send, CheckCircle2, Layers } from "lucide-react";
import { useState } from "react";

export function VentasalporMayor() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ruc: "",
    razonSocial: "",
    contacto: "",
    telefono: "",
    correo: "",
    ciudad: "",
    sector: "Constructora",
    volumenEstimado: "Mensual regular",
    comentarios: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitud de Ventas Corporativas / Mayor:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Principal */}
      <div className="bg-[#4682B4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <Layers className="w-10 h-10 text-blue-100" />
            <h1 className="text-4xl font-bold">Ventas al por Mayor y Corporativas</h1>
          </div>
          <p className="text-xl opacity-90">Abastecimiento a gran escala de tuberías, conexiones y materiales de saneamiento con precios de fábrica</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Fila de Beneficios Clave */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-[#4682B4]">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Descuentos por Volumen</h3>
              <p className="text-gray-600 text-sm">Escalas de precios preferenciales y márgenes altamente competitivos para distribuidores y consorcios.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-[#4682B4]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Logística y Despacho</h3>
              <p className="text-gray-600 text-sm">Coordinación de fletes y envíos directos a almacén o a pie de obra en tiempo récord a nivel nacional.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-[#4682B4]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Stock Homologado</h3>
              <p className="text-gray-600 text-sm">Garantía total de productos certificados que cumplen rigurosamente con las normativas NTP e ISO.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Informativa Izquierda */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-[#4682B4] to-[#36648B] text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Sectores Atendidos
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Suministramos materiales técnicos de alta resistencia para el desarrollo de infraestructuras críticas en:
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-2">✓ Empresas prestadoras de servicios de agua (EPS)</li>
                <li className="flex items-center gap-2">✓ Ferreterías mayoristas y distribuidores locales</li>
                <li className="flex items-center gap-2">✓ Constructoras de redes matrices de saneamiento</li>
                <li className="flex items-center gap-2">✓ Proyectos inmobiliarios y de habilitación urbana</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-sm text-gray-600">
              <h4 className="font-bold text-gray-800 mb-2">¿Ya cuentas con una lista de requerimientos?</h4>
              <p>
                Si tienes un documento de licitación, metrados específicos de ingeniería o planos, puedes indicarlo en el formulario y un ejecutivo senior abrirá un canal de comunicación directa contigo.
              </p>
            </div>
          </div>

          {/* Columna del Formulario Corporativo */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Alta de Cliente Mayorista</h2>
              <p className="text-gray-600 mb-6">Completa tus datos comerciales para asignar un asesor corporativo a tu cuenta.</p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-md text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto" />
                  <h3 className="text-xl font-bold">¡Solicitud Especial de Distribución Recibida!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Tu requerimiento de volumen ha ingresado a nuestra mesa comercial. Nos comunicaremos al número telefónico asignado para coordinar los términos de crédito y listas de precios.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-[#4682B4] hover:underline font-medium pt-2"
                  >
                    Enviar otra solicitud corporativa
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">RUC de la Empresa *</label>
                      <input
                        type="text"
                        name="ruc"
                        value={formData.ruc}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        placeholder="Ej. 20123456789"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Razón Social *</label>
                      <input
                        type="text"
                        name="razonSocial"
                        value={formData.razonSocial}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        placeholder="Ej. Distribuidora Hidráulica del Perú S.A.C."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Contacto Comercial *</label>
                      <input
                        type="text"
                        name="contacto"
                        value={formData.contacto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        placeholder="Nombre del encargado"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono Móvil *</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Correo Corporativo *</label>
                      <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Ciudad / Región *</label>
                      <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                        placeholder="Ej. Huancayo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Giro o Sector Comercial</label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      >
                        <option value="Constructora">Constructora / Consorcio</option>
                        <option value="Distribuidor">Ferretería Mayorista / Distribuidor</option>
                        <option value="EPS">Entidad Pública o EPS</option>
                        <option value="Particular">Ingeniero / Contratista Independiente</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Volumen de Compra Estimado</label>
                      <select
                        name="volumenEstimado"
                        value={formData.volumenEstimado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      >
                        <option value="Mensual regular">Abastecimiento Mensual Recurrente</option>
                        <option value="Un solo proyecto grande">Proyecto único de Gran Envergadura</option>
                        <option value="Stock inicial tienda">Lote de Stock Inicial para Almacén</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Detalla los materiales o marcas requeridas (Opcional)</label>
                    <textarea
                      name="comentarios"
                      value={formData.comentarios}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      placeholder="Indica si necesitas medidas especiales, diámetros de tuberías específicos, o volumen estimado en toneladas/metros..."
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-[#4682B4] text-white px-8 py-2.5 rounded-md hover:bg-[#36648B] transition text-sm font-medium flex items-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4" /> Enviar Solicitud Comercial
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}