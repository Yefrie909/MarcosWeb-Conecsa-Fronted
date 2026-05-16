import { Headphones, Mail, Phone, MessageCircle, HelpCircle, Send, Clock } from "lucide-react";
import { useState } from "react";

export function SoporteTecnico() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    categoria: "Problemas Técnicos",
    asunto: "",
    mensaje: ""
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
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        categoria: "Problemas Técnicos",
        asunto: "",
        mensaje: ""
      });
    }, 5000);
  };

  const faqs = [
    {
      question: "¿Cómo puedo consultar el estado de mi trámite?",
      answer: "Puede consultar el estado de su trámite ingresando al Portal de Transparencia con su número de expediente."
    },
    {
      question: "¿Dónde puedo descargar formularios?",
      answer: "Los formularios están disponibles en la sección de Documentos de Gestión, específicamente en el TUPA."
    },
    {
      question: "¿Cómo obtengo una copia de ordenanzas municipales?",
      answer: "Las ordenanzas están disponibles en formato PDF en la sección Documentos Normativos de nuestro portal."
    },
    {
      question: "¿Qué navegadores son compatibles con el portal?",
      answer: "El portal es compatible con Chrome, Firefox, Safari y Edge en sus versiones más recientes."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Headphones className="w-12 h-12" />
            <h1 className="text-4xl">Soporte Técnico</h1>
          </div>
          <p className="text-xl opacity-90">Asistencia técnica y resolución de consultas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-2">Teléfono</h3>
            <p className="text-gray-600 mb-2">(064) 248-000</p>
            <p className="text-sm text-gray-500">Anexo 300 - Soporte</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-2">Email</h3>
            <p className="text-gray-600 mb-2">soporte@munieltambo.gob.pe</p>
            <p className="text-sm text-gray-500">Respuesta en 24-48 horas</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-2">Horario</h3>
            <p className="text-gray-600 mb-2">Lun - Vie</p>
            <p className="text-sm text-gray-500">8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-cyan-600" />
              Enviar Consulta
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <p className="text-green-800">
                  ✓ Tu consulta ha sido enviada exitosamente. Nuestro equipo te responderá pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="987654321"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Categoría</label>
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                >
                  <option value="Problemas Técnicos">Problemas Técnicos</option>
                  <option value="Consulta General">Consulta General</option>
                  <option value="Trámites">Trámites</option>
                  <option value="Acceso a Información">Acceso a Información</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="Breve descripción del problema"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  placeholder="Describe tu consulta o problema en detalle..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-600" />
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="mb-2 text-cyan-600">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-cyan-50 rounded-lg">
              <h3 className="mb-3">¿No encontraste lo que buscabas?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta 
                o problema que tengas.
              </p>
              <div className="flex gap-4">
                <a href="tel:064248000" className="flex-1 bg-cyan-600 text-white text-center py-2 rounded-md hover:bg-cyan-700 transition">
                  Llamar Ahora
                </a>
                <a href="mailto:soporte@munieltambo.gob.pe" className="flex-1 bg-white text-cyan-600 border border-cyan-600 text-center py-2 rounded-md hover:bg-cyan-50 transition">
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-6">Recursos Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="mb-2">Guías y Tutoriales</h3>
              <p className="text-gray-600 text-sm mb-3">
                Descarga guías paso a paso para realizar diferentes trámites y servicios.
              </p>
              <a href="#" className="text-cyan-600 hover:underline text-sm">Ver guías →</a>
            </div>
            <div>
              <h3 className="mb-2">Videos Instructivos</h3>
              <p className="text-gray-600 text-sm mb-3">
                Mira videos explicativos sobre el uso del portal y servicios municipales.
              </p>
              <a href="#" className="text-cyan-600 hover:underline text-sm">Ver videos →</a>
            </div>
            <div>
              <h3 className="mb-2">Mesa de Ayuda Presencial</h3>
              <p className="text-gray-600 text-sm mb-3">
                Visítanos en Jr. Mantaro N° 1005, primer piso - Módulo de Atención.
              </p>
              <a href="#" className="text-cyan-600 hover:underline text-sm">Ver ubicación →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
