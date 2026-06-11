import { useEffect, useState } from "react";

interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoria: string;
  marca: string;
  color: string;
  tamano: string;
}

export function ProductosSaneamiento() {
  const [products, setProducts] = useState<Producto[]>([]);
  const API_URL = "http://localhost:8080/api/productos";

  // ESTADOS PARA LOS FILTROS
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedBrand, setSelectedBrand] = useState("todos");
  const [onlyWithStock, setOnlyWithStock] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000); 

  // LISTAS DINÁMICAS PARA EL MENÚ DE FILTROS
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  // CORRECCIÓN 1: Marcador de posición real para evitar íconos rotos
  const IMAGEN_DEFECTO = "https://placehold.co/300x200?text=Imagen+No+Disponible";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Respuesta de red no ok");
        return res.json();
      })
      .then((data: Producto[]) => {
        console.log("Productos recibidos desde MySQL:", data);
        setProducts(data);
        
        if (data && data.length > 0) {
          // 1. Extraer categorías y marcas únicas que existen realmente en MySQL
          const catsUnicas = Array.from(new Set(data.map(p => p.categoria).filter(Boolean)));
          const marcasUnicas = Array.from(new Set(data.map(p => p.marca).filter(Boolean)));
          setCategories(catsUnicas);
          setBrands(marcasUnicas);

          // 2. Ajustar el precio máximo dinámicamente
          const precios = data.map((p) => Number(p.precio) || 0);
          const precioMasAlto = Math.max(...precios);
          setMaxPrice(precioMasAlto > 200 ? precioMasAlto : 200);
        }
      })
      .catch((err) => console.error("Error crítico al conectar con Spring Boot:", err));
  }, []);

  // LÓGICA DE FILTRADO COMBINADO
  const filtered = products.filter((p) => {
    const cumplePrecio = p.precio >= minPrice && p.precio <= maxPrice;
    const cumpleBusqueda = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.descripcion?.toLowerCase().includes(searchTerm.toLowerCase());
    const cumpleCategoria = selectedCategory === "todos" || p.categoria === selectedCategory;
    const cumpleMarca = selectedBrand === "todos" || p.marca === selectedBrand;
    const cumpleStock = !onlyWithStock || p.stock > 0;

    return cumplePrecio && cumpleBusqueda && cumpleCategoria && cumpleMarca && cumpleStock;
  });

  // Función rápida para limpiar todos los filtros de golpe
  const reiniciarFiltros = () => {
    setSearchTerm("");
    setSelectedCategory("todos");
    setSelectedBrand("todos");
    setOnlyWithStock(false);
    setMinPrice(0);
    if (products.length > 0) {
      const precios = products.map((p) => Number(p.precio) || 0);
      setMaxPrice(Math.max(...precios));
    }
  };

  return (
    <div className="container-fluid py-4" style={{ maxWidth: "1400px", fontFamily: "sans-serif" }}>
      
      {/* 🔍 BARRA DE BÚSQUEDA SUPERIOR MINIMALISTA */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
            <input 
              type="text" 
              className="form-control form-control-lg border-0 bg-light fs-6 placeholder-glow"
              placeholder="🔍 Buscar tuberías, clavos, herramientas o marcas..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row g-4">
        
        {/* 🎛️ SIDEBAR DE FILTROS AVANZADOS */}
        <div className="col-12 col-md-4 col-lg-3">
          <div className="card border-0 bg-white p-4 rounded-3 shadow-sm position-sticky" style={{ top: "100px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="text-uppercase fw-bold text-dark m-0" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                Filtros Avanzados
              </h6>
              <button onClick={reiniciarFiltros} className="btn btn-link text-decoration-none text-muted p-0 small">
                Limpiar todo
              </button>
            </div>

            {/* 1. FILTRO POR CATEGORÍA */}
            <div className="mb-4">
              <label className="form-label text-secondary fw-semibold small mb-2">Categoría</label>
              <select 
                className="form-select form-select-sm border-light bg-light text-dark py-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="todos">Todas las categorías</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* 2. FILTRO POR MARCA */}
            <div className="mb-4">
              <label className="form-label text-secondary fw-semibold small mb-2">Marca / Fabricante</label>
              <select 
                className="form-select form-select-sm border-light bg-light text-dark py-2"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="todos">Todas las marcas</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* 3. FILTRO POR PRECIO */}
            <div className="mb-4">
              <label className="form-label text-secondary fw-semibold small mb-1">Rango de Precio</label>
              <div className="d-flex justify-content-between text-muted small mb-2">
                <span>Min: S/ {minPrice}</span>
                <span className="text-primary fw-bold">Max: S/ {maxPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5000" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))} 
                className="form-range" 
              />
            </div>

            {/* 4. FILTRO DE DISPONIBILIDAD */}
            <div className="form-check form-switch pt-2 border-top border-light">
              <input 
                className="form-check-input accent-blue-600" 
                type="checkbox" 
                id="stockSwitch"
                checked={onlyWithStock}
                onChange={(e) => setOnlyWithStock(e.target.checked)}
              />
              <label className="form-check-label text-secondary small fw-medium" htmlFor="stockSwitch">
                Solo productos en stock
              </label>
            </div>

          </div>
        </div>

        {/* 📦 CONTENEDOR CENTRAL DE PRODUCTOS */}
        <div className="col-12 col-md-8 col-lg-9">
          <p className="text-muted small mb-3">
            Mostrando <span className="fw-bold text-dark">{filtered.length}</span> productos encontrados
          </p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {filtered.map((p) => {
              // CORRECCIÓN 2: Evaluamos si la imagen guardada ya incluye el servidor o necesita la carpeta publica
              const srcImagenReal = p.imagen 
                ? (p.imagen.startsWith("http") ? p.imagen : `http://localhost:8080/uploads/${p.imagen}`)
                : IMAGEN_DEFECTO;

              return (
                <div key={p.idProducto} className="col">
                  <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden position-relative bg-white border border-gray-100">
                    
                    {/* Categoría flotante minimalista */}
                    <span className="position-absolute top-0 start-0 m-3 badge bg-white text-secondary border px-2 py-1 shadow-sm text-uppercase fw-semibold" style={{ fontSize: "9px", borderRadius: "4px", zIndex: 10 }}>
                      {p.categoria || "General"}
                    </span>

                    {/* Caja de Imagen limpia */}
                    <div className="p-3 bg-light d-flex align-items-center justify-content-center" style={{ height: "220px", overflow: "hidden" }}>
                      <img 
                        src={srcImagenReal} 
                        alt={p.nombre} 
                        className="img-fluid h-100 w-100 object-fit-cover rounded-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== IMAGEN_DEFECTO) target.src = IMAGEN_DEFECTO;
                        }}
                      />
                    </div>

                    {/* Detalles del Producto */}
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="text-muted small text-uppercase fw-semibold mb-1" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>
                        {p.marca || "Importado"} {p.tamano ? `• ${p.tamano}` : ""}
                      </div>
                      
                      <h5 className="card-title fw-bold text-dark mb-2 text-truncate" title={p.nombre}>
                        {p.nombre}
                      </h5>
                      
                      <p className="card-text text-muted small flex-grow-1 mb-3" style={{ minHeight: "38px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {p.descripcion || "Sin descripción disponible para este material de ferretería."}
                      </p>

                      <div className="d-flex align-items-baseline mb-3">
                        <span className="fs-4 fw-bold text-primary">
                          S/ {Number(p.precio).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      {/* Fila inferior de Stock e Información Adicional */}
                      <div className="mt-auto pt-3 border-top border-light d-flex justify-content-between align-items-center">
                        <span className={`small fw-medium ${p.stock > 0 ? "text-success" : "text-danger"}`}>
                          {p.stock > 0 ? `● ${p.stock} disponibles` : "❌ Agotado"}
                        </span>
                        {p.color && (
                          <span className="badge bg-light text-muted border border-gray-200 small">
                            {p.color}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* MENSAJE CUANDO NADA COINCIDE */}
          {filtered.length === 0 && (
            <div className="text-center py-5 bg-white rounded-3 shadow-sm mt-2 border">
              <div className="text-muted fs-4 mb-2">🤷‍♂️</div>
              <p className="text-muted fw-medium mb-1">No encontramos coincidencias para tu búsqueda.</p>
              <p className="text-muted small">Intenta cambiando los filtros o escribiendo otra palabra.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}