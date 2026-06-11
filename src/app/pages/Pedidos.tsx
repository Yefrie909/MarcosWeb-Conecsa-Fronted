import { FileText, Download, Search, Calendar } from "lucide-react";
import { useState } from "react";

export function Pedidos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");

  const years = ["2026", "2025", "2024", "2023"];

  const documents = [
    {
      id: 1,
      type: "Ordenanza Municipal",
      number: "001-2026-MDET",
      title: "Aprobación del Plan de Desarrollo Local Concertado 2026-2030",
      date: "15 de Marzo, 2026",
      year: "2026"
    },
    {
      id: 2,
      type: "Decreto de Alcaldía",
      number: "002-2026-A/MDET",
      title: "Conformación de Comisión de Transparencia Municipal",
      date: "10 de Marzo, 2026",
      year: "2026"
    },
    {
      id: 3,
      type: "Resolución de Alcaldía",
      number: "045-2026-MDET",
      title: "Aprobación del Plan Operativo Institucional 2026",
      date: "5 de Marzo, 2026",
      year: "2026"
    },
    {
      id: 4,
      type: "Ordenanza Municipal",
      number: "012-2025-MDET",
      title: "Regulación de Comercio Ambulatorio en Vías Públicas",
      date: "20 de Diciembre, 2025",
      year: "2025"
    },
    {
      id: 5,
      type: "Decreto de Alcaldía",
      number: "008-2026-A/MDET",
      title: "Declaratoria de Emergencia para Obras de Infraestructura",
      date: "1 de Marzo, 2026",
      year: "2026"
    },
    {
      id: 6,
      type: "Resolución de Alcaldía",
      number: "038-2026-MDET",
      title: "Designación de Responsables de Áreas Administrativas",
      date: "25 de Febrero, 2026",
      year: "2026"
    },
    {
      id: 7,
      type: "Ordenanza Municipal",
      number: "010-2025-MDET",
      title: "Reglamento de Aplicación de Sanciones Administrativas",
      date: "15 de Noviembre, 2025",
      year: "2025"
    },
    {
      id: 8,
      type: "Decreto de Alcaldía",
      number: "015-2025-A/MDET",
      title: "Aprobación de Beneficios Tributarios 2026",
      date: "30 de Diciembre, 2025",
      year: "2025"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "Todos" || doc.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Documentos Normativos</h1>
          <p className="text-xl opacity-90">Ordenanzas, decretos y resoluciones municipales</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl">{documents.filter(d => d.type === "Ordenanza Municipal").length}</p>
                <p className="text-gray-600 text-sm">Ordenanzas</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl">{documents.filter(d => d.type === "Decreto de Alcaldía").length}</p>
                <p className="text-gray-600 text-sm">Decretos</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl">{documents.filter(d => d.type === "Resolución de Alcaldía").length}</p>
                <p className="text-gray-600 text-sm">Resoluciones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Documents List */}
        {filteredDocuments.length > 0 ? (
          <div className="space-y-4">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        doc.type === "Ordenanza Municipal" ? "bg-green-100 text-green-700" :
                        doc.type === "Decreto de Alcaldía" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {doc.type}
                      </span>
                      <span className="text-sm text-gray-500">{doc.number}</span>
                    </div>
                    <h3 className="text-lg mb-2">{doc.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{doc.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                    <Download className="w-4 h-4" />
                    Descargar PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron documentos con los criterios seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
