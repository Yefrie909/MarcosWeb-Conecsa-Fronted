import { Book, User, Mail, Phone, MessageSquare, Send, AlertCircle } from "lucide-react";
import { useState } from "react";

export function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    tipoDocumento: "DNI",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoReclamo: "Queja",
    motivo: "",
    detalle: "",
    pedido: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // En una aplicación real, aquí se enviarían los datos al servidor
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        tipoDocumento: "DNI",
        numeroDocumento: "",
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        direccion: "",
        tipoReclamo: "Queja",
        motivo: "",
        detalle: "",
        pedido: ""
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-12 h-12" />
            <h1 className="text-4xl">Libro de Reclamaciones</h1>
          </div>
          <p className="text-xl opacity-90">Registra tu queja o reclamo de manera oficial</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg mb-2 text-orange-900">Importante</h3>
              <p className="text-orange-800 mb-2">
                El Libro de Reclamaciones es un derecho que tienes como ciudadano para expresar 
                tu disconformidad con los servicios brindados por la municipalidad.
              </p>
              <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                <li>Tu reclamo será atendido en un plazo máximo de 30 días calendario</li>
                <li>Recibirás un número de registro para hacer seguimiento</li>
                <li>La presentación del reclamo no genera ningún costo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-green-900">Reclamo Registrado Exitosamente</h3>
                <p className="text-green-800 mb-2">
                  Tu reclamo ha sido registrado con el código: <strong>REC-2026-{Math.floor(Math.random() * 10000)}</strong>
                </p>
                <p className="text-green-800 text-sm">
                  Recibirás una notificación por correo electrónico con los detalles y el número de seguimiento.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-6">Formulario de Reclamo</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-orange-600" />
                Datos Personales
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Tipo de Documento</label>
                  <select
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de Extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Número de Documento</label>
                  <input
                    type="text"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Nombres</label>
                  <input
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Juan Carlos"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Apellidos</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Pérez García"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="987654321"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Jr. Los Pinos 123, El Tambo, Huancayo"
                  />
                </div>
              </div>
            </div>

            {/* Complaint Details */}
            <div>
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-600" />
                Detalles del Reclamo
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Tipo</label>
                  <select
                    name="tipoReclamo"
                    value={formData.tipoReclamo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="Queja">Queja</option>
                    <option value="Reclamo">Reclamo</option>
                    <option value="Sugerencia">Sugerencia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Motivo</label>
                  <input
                    type="text"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Ej: Demora en atención de trámite"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Detalle del Reclamo</label>
                  <textarea
                    name="detalle"
                    value={formData.detalle}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Describe en detalle tu reclamo..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Pedido / Solución Esperada</label>
                  <textarea
                    name="pedido"
                    value={formData.pedido}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="¿Qué esperas que se haga respecto a tu reclamo?"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-md hover:bg-orange-700 transition flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Reclamo
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl mb-4">Otras Formas de Presentar tu Reclamo</h3>
          <div className="space-y-3 text-gray-600">
            <p>• Presencial: Jr. Mantaro N° 1005, El Tambo - Oficina de Atención al Ciudadano</p>
            <p>• Correo electrónico: reclamos@munieltambo.gob.pe</p>
            <p>• Teléfono: (064) 248-000 Anexo 101</p>
            <p>• Horario: Lunes a Viernes de 8:00 AM a 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
