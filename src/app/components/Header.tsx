import { Link } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#c41e3a] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <span>CONECSA</span>
            <span>Teléfono: (064) 248-000</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🏛️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#c41e3a]">CONECSA SAC</h1>
              <p className="text-sm text-gray-600">Central</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#c41e3a] transition">
              Inicio
            </Link>
            <Link to="/noticias" className="text-gray-700 hover:text-[#c41e3a] transition">
              Noticias
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#c41e3a] transition">
                Servicios <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                
                {/* ¡CORREGIDO MENÚ ESCRITORIO! */}
                <Link to="/productos-saneamiento" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Productos Saneamiento
                </Link>
                
                <Link to="/documentos-normativos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Documentos Normativos
                </Link>
                <Link to="/documentos-gestion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Documentos de Gestión
                </Link>
                <Link to="/libro-reclamaciones" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Libro de Reclamaciones
                </Link>
                <Link to="/soporte-tecnico" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Soporte Técnico
                </Link>
              </div>
            </div>

            <Link to="/admin/login" className="text-gray-700 hover:text-[#c41e3a] transition">
              Administrador
            </Link>
            <Link to="/portal-transparencia" className="bg-[#c41e3a] text-white px-4 py-2 rounded-md hover:bg-[#a01830] transition">
              Portal de Transparencia
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/noticias" className="block py-2 text-gray-700 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
              Noticias
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#c41e3a]">
                Servicios <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  
                  {/* ¡CORREGIDO MENÚ MÓVIL! */}
                  <Link to="/productos-saneamiento" className="block py-2 text-gray-600 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
                    Productos Saneamiento
                  </Link>
                  
                  <Link to="/documentos-normativos" className="block py-2 text-gray-600 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
                    Documentos Normativos
                  </Link>
                  <Link to="/documentos-gestion" className="block py-2 text-gray-600 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
                    Documentos de Gestión
                  </Link>
                  <Link to="/libro-reclamaciones" className="block py-2 text-gray-600 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
                    Libro de Reclamaciones
                  </Link>
                  <Link to="/soporte-tecnico" className="block py-2 text-gray-600 hover:text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
                    Soporte Técnico
                  </Link>
                </div>
              )}
            </div>
            <Link to="/portal-transparencia" className="block py-2 text-[#c41e3a]" onClick={() => setMobileMenuOpen(false)}>
              Portal de Transparencia
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
