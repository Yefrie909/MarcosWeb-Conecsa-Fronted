import { FileText, Download, FolderOpen } from "lucide-react";

export function DocumentosGestion() {
  const documentCategories = [
    {
      title: "Instrumentos de Gestión",
      documents: [
        {
          name: "ROF - Reglamento de Organización y Funciones",
          year: "2026",
          size: "2.5 MB"
        },
        {
          name: "MOF - Manual de Organización y Funciones",
          year: "2026",
          size: "3.2 MB"
        },
        {
          name: "CAP - Cuadro para Asignación de Personal",
          year: "2026",
          size: "1.8 MB"
        },
        {
          name: "MAPRO - Manual de Procedimientos",
          year: "2026",
          size: "4.1 MB"
        }
      ]
    },
    {
      title: "Planificación",
      documents: [
        {
          name: "Plan de Desarrollo Local Concertado 2026-2030",
          year: "2026",
          size: "5.3 MB"
        },
        {
          name: "Plan Operativo Institucional - POI 2026",
          year: "2026",
          size: "2.1 MB"
        },
        {
          name: "Plan Estratégico Institucional - PEI 2024-2026",
          year: "2024",
          size: "3.8 MB"
        },
        {
          name: "Presupuesto Institucional de Apertura - PIA 2026",
          year: "2026",
          size: "1.9 MB"
        }
      ]
    },
    {
      title: "Gestión de Recursos Humanos",
      documents: [
        {
          name: "Reglamento Interno de Trabajo",
          year: "2025",
          size: "1.2 MB"
        },
        {
          name: "Manual de Perfiles de Puestos",
          year: "2026",
          size: "2.7 MB"
        },
        {
          name: "Política de Gestión del Talento Humano",
          year: "2026",
          size: "980 KB"
        }
      ]
    },
    {
      title: "Administración",
      documents: [
        {
          name: "TUPA - Texto Único de Procedimientos Administrativos",
          year: "2026",
          size: "4.5 MB"
        },
        {
          name: "Directiva de Tesorería",
          year: "2026",
          size: "1.1 MB"
        },
        {
          name: "Manual de Contrataciones del Estado",
          year: "2025",
          size: "2.3 MB"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Documentos de Gestión</h1>
          <p className="text-xl opacity-90">Instrumentos normativos y de planificación institucional</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <FolderOpen className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg mb-2 text-purple-900">Acerca de los Documentos de Gestión</h3>
              <p className="text-purple-800">
                Los documentos de gestión son instrumentos técnico-normativos que orientan y regulan 
                la gestión institucional de la municipalidad. Estos documentos están disponibles para 
                consulta pública en cumplimiento de la Ley de Transparencia y Acceso a la Información Pública.
              </p>
            </div>
          </div>
        </div>

        {/* Document Categories */}
        <div className="space-y-8">
          {documentCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-2xl">{category.title}</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1">{doc.name}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span>Año: {doc.year}</span>
                            <span>•</span>
                            <span>Tamaño: {doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                          <Download className="w-4 h-4" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-4">Actualización de Documentos</h3>
            <p className="text-gray-600 mb-4">
              Los documentos de gestión son actualizados periódicamente según las necesidades 
              institucionales y cambios normativos. La última actualización fue realizada en marzo de 2026.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl mb-4">Solicitudes de Información</h3>
            <p className="text-gray-600 mb-4">
              Para solicitudes de información adicional o copias autenticadas, puede acercarse 
              a la Oficina de Secretaría General o enviar un correo a secretaria@munieltambo.gob.pe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
