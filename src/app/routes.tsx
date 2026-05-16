import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Noticias } from "./pages/Noticias";
import { DocumentosNormativos } from "./pages/DocumentosNormativos";
import { ProductosSaneamiento } from "./pages/ProductosSaneamiento"; // <-- Tu archivo real
import { DocumentosGestion } from "./pages/DocumentosGestion";
import { LibroReclamaciones } from "./pages/LibroReclamaciones";
import { SoporteTecnico } from "./pages/SoporteTecnico";
import { PortalTransparencia } from "./pages/PortalTransparencia";
import { NotFound } from "./pages/NotFound";

/* ADMIN */
import Login from "./admin/pages/Login";
import { Dashboard } from "./admin/pages/Dashboard"; 
import Productos from "./admin/pages/Productos";
import Usuarios from "./admin/pages/Usuarios";
import { Pedidos } from "./admin/pages/Pedidos"; 
import { AdminLayout } from "./admin/componentes/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, // Reestablecido con la "C" mayúscula correcta
    children: [
      { index: true, Component: Home },
      { path: "noticias", Component: Noticias },
      { path: "documentos-normativos", Component: DocumentosNormativos },
      
      // SOLUCIÓN FINAL: Soportamos las dos palabras con la mayúscula original
      { path: "desarrollo-social", Component: ProductosSaneamiento }, 
      { path: "productos-saneamiento", Component: ProductosSaneamiento }, 
      
      { path: "documentos-gestion", Component: DocumentosGestion },
      { path: "libro-reclamaciones", Component: LibroReclamaciones },
      { path: "soporte-tecnico", Component: SoporteTecnico },
      { path: "portal-transparencia", Component: PortalTransparencia },

      /* LOGIN */
      { path: "admin/login", Component: Login },

      /* PANEL ADMIN */
      { path: "admin", Component: AdminLayout, children: [
          { path: "dashboard", Component: Dashboard },
          { path: "productos", Component: Productos },
          { path: "usuarios", Component: Usuarios },
          { path: "pedidos", Component: Pedidos },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
