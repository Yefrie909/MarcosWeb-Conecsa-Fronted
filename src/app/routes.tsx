import { createBrowserRouter } from "react-router";

// CORREGIDO: Ruta exacta basada en tu árbol de carpetas real
import { Root } from "./components/Root"; 

// CORREGIDO: Se eliminan extensiones .tsx innecesarias para evitar conflictos con Vite
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Noticias } from "./pages/Noticias";
import { Pedidos } from "./pages/Pedidos"; 
import { ProductosSaneamiento } from "./pages/ProductosSaneamiento"; 
import { AsesoriaTecnica } from "./pages/AsesoriaTecnica";
import { BolsadeTrabajo } from "./pages/BolsadeTrabajo";
import { CotizatuProducto } from "./pages/CotizatuProducto";
import { VentasalporMayor } from "./pages/VentasalporMayor"; 

// CORREGIDO: Ruta directa al Login y Register de usuario
import { Login as LoginCliente } from "./pages/Login";

/* SECCIÓN PANEL DE ADMINISTRACIÓN */
// CORREGIDO: Removidas las extensiones .tsx explícitas que rompen el empaquetado de Vite
import Login from "./admin/pages/Login";
import { Dashboard } from "./admin/pages/Dashboard"; 
import Productos from "./admin/pages/Productos";
import Usuarios from "./admin/pages/Usuarios";
import { AdminLayout } from "./admin/componentes/AdminLayout";
import { Pedidos as AdminPedidos } from "./admin/pages/Pedidos"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
      { path: "noticias", element: <Noticias /> },
      { path: "pedidos", element: <Pedidos /> },
      { path: "asesoria-tecnica", element: <AsesoriaTecnica /> },
      { path: "bolsa-de-trabajo", element: <BolsadeTrabajo /> },
      { path: "cotiza-tu-producto", element: <CotizatuProducto /> },
      { path: "ventas-al-por-mayor", element: <VentasalporMayor /> },
      { path: "desarrollo-social", element: <ProductosSaneamiento /> }, 
      { path: "productos-saneamiento", element: <ProductosSaneamiento /> }, 
      
      // NUEVO: Ruta configurada para que responda al Header como "/login"
      { path: "login", element: <LoginCliente /> }, 
      
      // NUEVO: Ruta añadida para el registro público de usuarios
      
      { path: "admin/login", element: <Login /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "productos", element: <Productos /> },
      { path: "usuarios", element: <Usuarios /> },
      { path: "pedidos", element: <AdminPedidos /> }, 
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);