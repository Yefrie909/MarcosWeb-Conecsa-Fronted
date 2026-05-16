import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONECSA</h3>
            <p className="text-gray-400 text-sm">
              Trabajando por el desarrollo y bienestar de nuestra comunidad en Huancayo, Perú.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Jr. Mantaro N° 1005, El Tambo, Huancayo, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(064) 248-000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>informes@munieltambo.gob.pe</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/portal-transparencia" className="hover:text-white transition">
                  Portal de Transparencia
                </Link>
              </li>
              <li>
                <Link to="/libro-reclamaciones" className="hover:text-white transition">
                  Libro de Reclamaciones
                </Link>
              </li>
              <li>
                <Link to="/documentos-gestion" className="hover:text-white transition">
                  Documentos de Gestión
                </Link>
              </li>
              <li>
                <Link to="/soporte-tecnico" className="hover:text-white transition">
                  Soporte Técnico
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Municipalidad Distrital de El Tambo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
