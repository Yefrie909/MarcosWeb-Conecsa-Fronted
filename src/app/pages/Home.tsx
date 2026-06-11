import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
// @ts-ignore
import productoSaneamientoImg from '@/assets/Home/ProductoSaneaminto.png';
// @ts-ignore
import asesoriaTecnicaGif from '@/assets/Home/AsesoriaTecnica.gif';
// @ts-ignore
import bolsaTrabajoGif from '@/assets/Home/BolsadeTrabajo.gif'; 
// @ts-ignore
import VentaalpormayorGif from '@/assets/Home/Ventaalpormayor.gif'; 
// @ts-ignore
import CotizatuproductoImg  from '@/assets/Home/Cotizatuproducto.png'; 
// @ts-ignore
import PedidosImg from '@/assets/Home/Pedidos.png'; 
// @ts-ignore
import EquipoImg from '@/assets/Slides/Equipo.jpg';
// @ts-ignore
import AlmacenImg from '@/assets/Slides/Almacen.jpg';
// @ts-ignore
import UbicacionImg from '@/assets/Slides/Ubicacion.png';

import { 
  FileText, 
  Users, 
  Building, 
  Book, 
  Headphones, 
  Eye,
  ArrowRight,
  Construction,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  // --- LÓGICA DEL HERO SLIDER ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: EquipoImg, 
      hasContent: true // <-- Activado en true para que muestre el título y botones en la primera imagen
    },
    {
      id: 2,
      image: AlmacenImg,
      hasContent: false // Vacío
    },
    {
      id: 3,
      image: UbicacionImg,
      hasContent: false // Vacío
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Cambio automático y optimizado cada 7 segundos (Se reinicia al cambiar manualmente para evitar saltos dobles)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); 
    return () => clearInterval(timer);
  }, [currentSlide]);
  // ------------------------------

  const services = [
    {
      icon: Users,
      title: "Productos Saneamiento",
      description: "Soluciones en agua, desagüe y equipamiento sanitario",
      link: "/productos-saneamiento",
      color: "bg-blue-500",
      backgroundImage: productoSaneamientoImg, 
    },
    {
      icon: FileText,
      title: "Pedidos",
      description: "Realiza y gestiona tus pedidos de forma rápida y segura",
      link: "/pedidos",
      color: "bg-green-500",
      backgroundImage: PedidosImg, 
    },
    {
      icon: Building,
      title: "Cotiza tu Producto",
      description: "Solicita cotizaciones personalizadas según tu proyecto",
      link: "/cotiza-tu-producto",
      color: "bg-purple-500",
      backgroundImage: CotizatuproductoImg,
    },
    {
      icon: Book,
      title: "Venta al por Mayor",
      description: "Precios especiales para Constructoras,Empresas,Municipalidades y Consorcios",
      link: "/ventas-al-por-mayor",
      color: "bg-orange-500",
      backgroundImage: VentaalpormayorGif,
    },
    {
      icon: Headphones,
      title: "Asesoría Técnica",
      description: "Soporte profesional para instalación y uso de productos",
      link: "/asesoria-tecnica",
      color: "bg-cyan-500",
      backgroundImage: asesoriaTecnicaGif, 
    },
    {
      icon: Eye,
      title: "Bolsa de Trabajo",
      description: "Únete a nuestro equipo y crece con nosotros",
      link: "/bolsa-de-trabajo",
      color: "bg-red-500",
      backgroundImage: bolsaTrabajoGif, 
    }
  ];

  const news = [
    {
      id: 1,
      title: "Inicio de Obra: Pavimentación de Av. Los Héroes",
      category: "Obras",
      date: "28 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1598764275156-34e7189e5074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBpbmZyYXN0cnVjdHVyZSUyMFBlcnV8ZW58MXx8fHwxNzc1MjU1MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Se dio inicio a la obra de pavimentación de la Av. Los Héroes, beneficiando a más de 5,000 familias del distrito."
    },
    {
      id: 2,
      title: "Campaña de Vacunación Gratuita 2026",
      category: "Salud",
      date: "25 de Marzo, 2026",
      image: "https://images.unsplash.com/photo-1687111731852-5cb9788dce27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMHByb2dyYW1zfGVufDF8fHx8MTc3NTI1NTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "La municipalidad inicia campaña de vacunación gratuita para niños y adultos mayores en todos los centers de salud del distrito."
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
    }
  ];

  return (
    <div>
      {/* Hero Section con Slider Integrado y Zoom (Ken Burns Effect) */}
      <section className="relative h-[500px] w-full overflow-hidden bg-gray-950">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Contenedor independiente de la imagen para aplicar el Zoom sin alterar los textos */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform ease-out"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  // Hace un zoom suave de 8% (scale(1.08)) en 7 segundos solo si está activo
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  transitionDuration: isActive ? '7000ms' : '0ms',
                }}
              ></div>

              {/* Capa oscura para contrastar contenido */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

              {/* Renderizado condicional del contenido */}
              {slide.hasContent && (
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20">
                  <div className="text-white max-w-2xl">
                    <h1 className="text-4xl md:text-5xl mb-4 font-bold">Bienvenidos a la Municipalidad Distrital de El Tambo</h1>
                    <p className="text-xl mb-8">Trabajando juntos por un distrito moderno, inclusivo y próspero</p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/portal-transparencia" className="bg-[#c41e3a] hover:bg-[#a01830] text-white px-6 py-3 rounded-md transition inline-flex items-center gap-2">
                        Portal de Transparencia
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link to="/noticias" className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md transition inline-flex items-center gap-2">
                        Ver Noticias
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Controles del Slider (Flechas traslúcidas con z-30 para prioridad de click) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores inferiores (Puntitos con z-30) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#c41e3a]' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 font-bold">Nuestros Servicios</h2>
            <p className="text-gray-600">Accede a la información y servicios que necesitas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className={`p-6 rounded-lg shadow-md hover:shadow-xl transition group min-h-[220px] flex flex-col justify-between relative overflow-hidden ${
                  service.backgroundImage ? 'text-white' : 'bg-white'
                }`}
                style={
                  service.backgroundImage
                    ? {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url(${service.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                <div>
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl mb-2 transition ${service.backgroundImage ? 'group-hover:text-gray-200' : 'group-hover:text-[#c41e3a]'}`}>
                    {service.title}
                  </h3>
                  <p className={service.backgroundImage ? 'text-gray-200 text-sm' : 'text-gray-600 text-sm'}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News and Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl mb-2 font-bold">Marcas</h2>
              <p className="text-gray-600">Respaldamos tus proyectos con las mejores marcas del mercado</p>
            </div>
            <Link to="/noticias" className="text-[#c41e3a] hover:underline flex items-center gap-2">
              Ver todas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-[#c41e3a] text-white px-3 py-1 rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-[#c41e3a] transition">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-[#c41e3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Ubicación</h3>
              <p className="opacity-90">Jr. Mantaro N° 1005, El Tambo, Huancayo</p>
            </div>
            <div>
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Horario de Atención</h3>
              <p className="opacity-90">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            </div>
            <div>
              <Construction className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Obras en Ejecución</h3>
              <p className="opacity-90">15 proyectos activos en 2026</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}