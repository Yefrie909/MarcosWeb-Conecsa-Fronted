import { Link } from "react-router";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import Logo from '../../assets/Marcas/Logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#4682B4] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <span></span>
            <span>Teléfono: (064) 248-000</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8"> 
        <div className="flex justify-between items-center h-20">
          
          {/* Logo oficial */}
          <Link to="/" className="flex items-center h-full">
            <img 
              src={Logo} 
              alt="Logo CONECSA SAC" 
              className="h-full w-auto object-cover" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#4682B4] transition">
              Inicio
            </Link>
            <Link to="/noticias" className="text-gray-700 hover:text-[#4682B4] transition">
              Noticias
            </Link>

            {/* Services Dropdown (Apertura Automática con Hover) */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#4682B4] transition bg-transparent border-0 cursor-pointer">
                Servicios <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Contenedor con puente invisible pt-3 para evitar cortes de hover */}
              <div className="absolute top-full left-0 pt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-lg rounded-md py-1 border border-gray-100">
                  <Link to="/productos-saneamiento" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Productos Saneamiento
                  </Link>
                  <Link to="/pedidos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Pedidos
                  </Link>
                  <Link to="/cotiza-tu-producto" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Cotiza tu Producto
                  </Link>
                  <Link to="/ventas-al-por-mayor" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Venta al por Mayor
                  </Link>
                  <Link to="/asesoria-tecnica" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Asesoría Técnica
                  </Link>
                  <Link to="/bolsa-de-trabajo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    Bolsa de Trabajo
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/admin/login" className="text-gray-700 hover:text-[#4682B4] transition">
              Administrador
            </Link>

            {/* Enlace Iniciar Sesión para Escritorio */}
            <Link 
              to="/login" 
              className="flex items-center gap-1.5 bg-[#4682B4] hover:bg-[#356a94] text-white px-4 py-2 rounded-md font-medium transition"
            >
              <User className="w-4 h-4" />
              Iniciar Sesión
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
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#4682B4]" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/noticias" className="block py-2 text-gray-700 hover:text-[#4682B4]" onClick={() => setMobileMenuOpen(false)}>
              Noticias
            </Link>

            {/* Services Dropdown (Control remoto por CSS) */}
<div className="relative group py-2">
  <button className="flex items-center gap-1 text-gray-700 hover:text-[#4682B4] transition bg-transparent border-0 cursor-pointer">
    Servicios <ChevronDown className="w-4 h-4" />
  </button>
  
  {/* Contenedor con espacio pt-3 para hacer el puente invisible */}
  <div className="absolute top-full left-0 pt-3 w-56 hidden opacity-0 invisible transition-all duration-200 z-50">
    <div className="bg-white shadow-lg rounded-md py-1 border border-gray-100">
      <Link to="/productos-saneamiento" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Productos Saneamiento
      </Link>
      <Link to="/pedidos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Pedidos
      </Link>
      <Link to="/cotiza-tu-producto" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Cotiza tu Producto
      </Link>
      <Link to="/ventas-al-por-mayor" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Venta al por Mayor
      </Link>
      <Link to="/asesoria-tecnica" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Asesoría Técnica
      </Link>
      <Link to="/bolsa-de-trabajo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
        Bolsa de Trabajo
      </Link>
    </div>
  </div>
</div>

            <Link to="/admin/login" className="block py-2 text-gray-700 hover:text-[#4682B4]" onClick={() => setMobileMenuOpen(false)}>
              Administrador
            </Link>

            {/* Enlace Iniciar Sesión para Menú Móvil */}
            <Link 
              to="/login" 
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 text-center bg-[#4682B4] hover:bg-[#356a94] text-white rounded-md font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              Iniciar Sesión
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}