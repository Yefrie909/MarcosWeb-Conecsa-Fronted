import { Calendar, Tag, Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Noticias() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", "Obras", "Salud", "Desarrollo Social", "Eventos", "Anuncios"];

  const allNews = [
    {
      id: 1,
      title: "Inicio de Obra: Pavimentación de Av. Los Héroes",
      category: "Obras",
      date: "28 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1598764275156-34e7189e5074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBpbmZyYXN0cnVjdHVyZSUyMFBlcnV8ZW58MXx8fHwxNzc1MjU1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Se dio inicio a la obra de pavimentación de la Av. Los Héroes, beneficiando a más de 5,000 familias del distrito. La obra tiene un presupuesto de S/ 2.5 millones y se espera culminar en 6 meses."
    },
    {
      id: 2,
      title: "Campaña de Vacunación Gratuita 2026",
      category: "Salud",
      date: "25 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1687111731852-5cb9788dce27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMHByb2dyYW1zfGVufDF8fHx8MTc3NTI1NTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "La municipalidad inicia campaña de vacunación gratuita para niños y adultos mayores en todos los centros de salud del distrito."
    },
    {
      id: 3,
      title: "Construcción de Parque Recreacional en Zona Norte",
      category: "Obras",
      date: "20 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1634114581762-c929b85a0aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzUyNTUyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Avanza al 60% la construcción del nuevo parque recreacional que contará con áreas verdes, juegos infantiles y zona deportiva."
    },
    {
      id: 4,
      title: "Programa de Capacitación para Emprendedores",
      category: "Desarrollo Social",
      date: "15 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1760726348016-15c939f8ad94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBQZXJ1fGVufDF8fHx8MTc3NTI1NTI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Se lanzó el programa de capacitación gratuita para emprendedores locales, con talleres de marketing digital y gestión empresarial."
    },
    {
      id: 5,
      title: "Inauguración de Nueva Posta Médica en San Agustín",
      category: "Salud",
      date: "10 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1773414443572-b6d6efdfe005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBtdW5pY2lwYWx8ZW58MXx8fHwxNzc1MjU1MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "El alcalde inauguró la nueva posta médica que atenderá a más de 3,000 familias del sector San Agustín."
    },
    {
      id: 6,
      title: "Feria de Emprendimiento Juvenil 2026",
      category: "Eventos",
      date: "5 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1760726348016-15c939f8ad94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBQZXJ1fGVufDF8fHx8MTc3NTI1NTI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Más de 50 jóvenes emprendedores presentaron sus proyectos en la feria anual de emprendimiento juvenil."
    },
    {
      id: 7,
      title: "Mejoramiento del Sistema de Alcantarillado",
      category: "Obras",
      date: "1 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1634114581762-c929b85a0aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzUyNTUyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Inicio de trabajos de mejoramiento del sistema de alcantarillado en 5 sectores del distrito."
    },
    {
      id: 8,
      title: "Programa Vaso de Leche: Nueva Distribución",
      category: "Desarrollo Social",
      date: "25 de Febrero, 2026",
      image: "https://images.unsplash.com/photo-1687111731852-5cb9788dce27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMHByb2dyYW1zfGVufDF8fHx8MTc3NTI1NTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Implementación de nuevo sistema de distribución del Programa Vaso de Leche para beneficiar a más familias."
    }
  ];

  const filteredNews = allNews.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#c41e3a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">Noticias y Actividades</h1>
          <p className="text-xl opacity-90">Mantente informado sobre las obras y programas de nuestra municipalidad</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md transition ${
                    selectedCategory === cat
                      ? "bg-[#c41e3a] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-[#c41e3a] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-[#c41e3a] transition">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron noticias con los criterios seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}
