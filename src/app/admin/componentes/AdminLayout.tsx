import { Outlet } from "react-router";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function AdminLayout() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="flex-1 bg-gray-100 min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Páginas */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}