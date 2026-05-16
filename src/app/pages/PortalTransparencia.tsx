import { Eye, DollarSign, Users, FileText, Building, TrendingUp, Download } from "lucide-react";

export function PortalTransparencia() {
  const categories = [
    {
      icon: DollarSign,
      title: "Información Presupuestal",
      items: [
        "Presupuesto Institucional de Apertura (PIA)",
        "Presupuesto Institucional Modificado (PIM)",
        "Ejecución Presupuestal 2026",
        "Estados Financieros"
      ],
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      items: [
        "Personal de Confianza",
        "Personal Nombrado y Contratado",
        "Declaraciones Juradas",
        "Planilla de Remuneraciones"
      ],
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Contrataciones",
      items: [
        "Plan Anual de Contrataciones",
        "Procesos de Selección",
        "Contratos y Adquisiciones",
        "Proveedores Registrados"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Building,
      title: "Proyectos de Inversión",
      items: [
        "Proyectos en Ejecución",
        "Proyectos Culminados",
        "Expedientes Técnicos",
        "Informes de Avance"
      ],
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Indicadores de Gestión",
      items: [
        "Metas Institucionales",
        "Evaluación de Desempeño",
        "Logros y Resultados",
        "Reportes Trimestrales"
      ],
      color: "bg-red-500"
    }
  ];

  const documents = [
    {
      title: "Ejecución Presupuestal - Marzo 2026",
      date: "30 de Marzo, 2026",
      size: "1.8 MB",
      category: "Presupuesto"
    },
    {
      title: "Planilla de Remuneraciones - Marzo 2026",
      date: "28 de Marzo, 2026",
      size: "950 KB",
      category: "RRHH"
    },
    {
      title: "Reporte de Contrataciones - Primer Trimestre",
      date: "25 de Marzo, 2026",
      size: "2.1 MB",
      category: "Contrataciones"
    },
    {
      title: "Avance de Proyectos de Inversión",
      date: "20 de Marzo, 2026",
      size: "3.4 MB",
      category: "Proyectos"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Eye className="w-12 h-12" />
            <h1 className="text-4xl">Portal de Transparencia</h1>
          </div>
          <p className="text-xl opacity-90">Acceso a información pública y rendición de cuentas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
          <h3 className="text-lg mb-2 text-red-900">Transparencia y Acceso a la Información Pública</h3>
          <p className="text-red-800">
            En cumplimiento de la Ley N° 27806 - Ley de Transparencia y Acceso a la Información Pública, 
            ponemos a tu disposición información actualizada sobre la gestión municipal. Toda la información 
            publicada es de carácter público y puede ser consultada libremente.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-green-600 mb-2">S/ 45.2M</div>
            <p className="text-gray-600">Presupuesto 2026</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-blue-600 mb-2">68%</div>
            <p className="text-gray-600">Ejecución Presupuestal</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-purple-600 mb-2">156</div>
            <p className="text-gray-600">Trabajadores</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-orange-600 mb-2">15</div>
            <p className="text-gray-600">Proyectos Activos</p>
          </div>
        </div>

        {/* Categories */}
        <h2 className="text-3xl mb-8">Categorías de Información</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className={`${category.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-lg">{category.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md transition text-sm">
                  Ver Documentos
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Documents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl mb-6">Documentos Recientes</h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{doc.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="text-red-600">{doc.category}</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition whitespace-nowrap">
                  <Download className="w-4 h-4" />
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Request Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl mb-4">Solicitud de Acceso a la Información</h3>
            <p className="text-gray-600 mb-4">
              Todo ciudadano tiene derecho a solicitar información que no se encuentre publicada. 
              El plazo máximo de respuesta es de 10 días hábiles.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Solicitar Información
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl mb-4">Audiencias Públicas</h3>
            <p className="text-gray-600 mb-4">
              Participación ciudadana en la rendición de cuentas. Próxima audiencia: 
              <strong> 15 de Abril, 2026</strong>
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Ver Calendario
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-red-600 text-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4">Responsable de Transparencia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2"><strong>Oficina de Transparencia y Acceso a la Información</strong></p>
              <p className="opacity-90">Jr. Mantaro N° 1005, 3er Piso, El Tambo</p>
            </div>
            <div>
              <p className="mb-2">Contacto:</p>
              <p className="opacity-90">Teléfono: (064) 248-000 Anexo 301</p>
              <p className="opacity-90">Email: transparencia@munieltambo.gob.pe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
