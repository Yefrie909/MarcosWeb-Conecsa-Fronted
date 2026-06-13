import { useEffect, useState } from "react";

interface Producto {
  idProducto?: number;
  nombre: string;

  categoria: {
    categoriaId: number;
    nombreCategoria: string;
  };

  marca: string;
  precio: number;
  stock: number;
  color: string;
  tamano: string;
  descripcion: string;
}


export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [idEditando, setIdEditando] = useState<number | null>(null);

  // ESTADOS DE CONFIGURACIÓN NUEVA CATEGORÍA
  const [nuevaCat, setNuevaCat] = useState("");
  const [mostrandoInput, setMostrandoInput] = useState(false);
  
  const [preview, setPreview] = useState<string | null>(null);
  const [categoria, setCategoria] = useState(1);
  const [nombreEspecifico, setNombreEspecifico] = useState("");
  const [marca, setMarca] = useState("");
  const [tamano, setTamano] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [color, setColor] = useState("");
  const [archivoImagen, setArchivoImagen] = useState<File | null>(null);

  const API_URL = "http://localhost:8080/api/productos";

  const manejarCambioArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setArchivoImagen(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
  obtenerProductos();
  obtenerCategorias();
}, []);

  const nombreFinalConstruido = `${nombreEspecifico} ${marca} ${tamano} ${color ? `Color ${color}` : ""}`.trim();
  const descripcionAutomatica = `Producto de alta calidad categoría ${categoria}. Marca: ${marca}. Medidas: ${tamano}.`;

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json();
      setProductos(data);
    } catch (error) { console.error("Error al obtener productos:", error); }
  };

  // FUNCIÓN PARA ACTUALIZAR Y GUARDAR EN MEMORIA
  const API_CATEGORIAS = "http://localhost:8080/api/categorias";
  const [categoriasDB, setCategoriasDB] = useState<any[]>([]);
  const agregarCategoriaCompleta = async () => {
  if (!nuevaCat.trim()) return;

  try {

    const response = await fetch(API_CATEGORIAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombreCategoria: nuevaCat,
        descripcion: "Creada desde frontend"
      })
    });

    if (!response.ok) {
      throw new Error("Error al guardar categoría");
    }

    alert("Categoría guardada correctamente");

    setNuevaCat("");
    setMostrandoInput(false);

    obtenerCategorias();

  } catch (error) {
    console.error(error);
    alert("Error al guardar categoría");
  }
};
const obtenerCategorias = async () => {
  try {
    const response = await fetch(API_CATEGORIAS);
    const data = await response.json();

    setCategoriasDB(data);

  } catch (error) {
    console.error("Error cargando categorías", error);
  }
};

  const limpiarFormulario = () => {
    setIdEditando(null); setNombreEspecifico(""); setCategoria(1); setPrecio(0); setStock(0);
    setArchivoImagen(null); setPreview(null);
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

const guardarProducto = async (e: React.FormEvent) => {
  e.preventDefault();

const producto = {
  nombre: nombreFinalConstruido,
  marca,
  tamano,
  color,
  descripcion: descripcionAutomatica,
  precio,
  stock,
  categoria: {
    categoriaId: categoria
  }
};

  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(producto)
    });

    if (respuesta.ok) {
      alert("Producto guardado");
      obtenerProductos();
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div style={{ display: "flex", gap: "30px", padding: "30px", fontFamily: "sans-serif", background: "#0f172a", minHeight: "100vh", color: "#fff" }}>
      
      <div style={{ flex: "1", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)", padding: "25px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "700" }}>{idEditando ? " Producto" : " Registro de Producto"}</h2>

        

        <form onSubmit={guardarProducto} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <label style={labelStyle}>1. Categoría</label>
<select
  value={categoria}
  onChange={(e) => setCategoria(Number(e.target.value))}
  style={{
    ...modernInput,
    color: "white"
  }}
>
  {categoriasDB.map((cat) => (
  <option
  value={cat.categoriaId}
>
  {cat.nombreCategoria}
</option>
  ))}
</select>

          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
             <div><label style={labelStyle}>Marca</label>
             <input
  type="text"
  value={marca}
  onChange={(e) => setMarca(e.target.value)}
  placeholder="Marca"
  style={modernInput} 
/></div>
             <div><label style={labelStyle}>Medida</label><input
  type="text"
  value={tamano}
  onChange={(e) => setTamano(e.target.value)}
  placeholder="Medida"
  style={modernInput}
/></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
             <div><label style={labelStyle}>Color</label><input
  type="text"
  value={color}
  onChange={(e) => setColor(e.target.value)}
  placeholder="Color"
  style={modernInput}
/></div>
             <div><label style={labelStyle}>Stock</label><input type="number" value={stock || ""} onChange={(e) => setStock(Number(e.target.value))} required style={modernInput} /></div>
          </div>

          <label style={labelStyle}>Precio Venta (S/.)</label>
          <input type="number" step="0.01" value={precio || ""} onChange={(e) => setPrecio(Number(e.target.value))} required style={modernInput} />

          <label style={labelStyle}>Fotografía</label>
          <input id="fileInput" type="file" accept="image/*" onChange={manejarCambioArchivo} style={modernInput} />
          <div style={{ width: "100%", height: "120px", background: "#1e293b", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px dashed #475569" }}>
             {preview ? <img src={preview} style={{ maxHeight: "100%", objectFit: "contain" }} /> : <span style={{color: "#475569"}}>Sin imagen</span>}
          </div>

          <button type="submit" style={buttonPrimaryModern}>{idEditando ? "Cargar Producto" : "Guardar Producto"}</button>
        </form>
      </div>

      <div style={{ flex: "1.5", background: "rgba(255,255,255,0.05)", padding: "25px", borderRadius: "22px", overflowX: "auto" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "700" }}>Productos Registrados</h2>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 12px" }}>
          <thead><tr><th style={tableHeader}>Producto</th><th style={tableHeader}>Acciones</th></tr></thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.idProducto} style={{ background: "rgba(255,255,255,0.04)" }}>
                <td style={tableCell}><strong>{p.nombre}</strong></td>
                <td style={tableCell}><button onClick={() => { setIdEditando(p.idProducto || null); setCategoria(p.categoria.categoriaId); }} style={buttonEditModern}>Modificar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const modernInput = { width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid rgba(145, 56, 56, 0.08)", background: "rgba(255,255,255,0.06)", color: "#fff", outline: "none" };
const labelStyle = { fontSize: "12px", color: "#94a3b8", fontWeight: "600" };
const tableHeader = { textAlign: "left" as const, padding: "10px", color: "#94a3b8", fontSize: "12px" };
const tableCell = { padding: "12px", color: "#e2e8f0", fontSize: "13px" };
const buttonPrimaryModern = { padding: "14px", border: "none", borderRadius: "10px", background: "linear-gradient(135deg,#2563eb,#06b6d4)", color: "#fff", fontWeight: "bold" as const, cursor: "pointer" };
const buttonEditModern = { padding: "6px 10px", border: "none", borderRadius: "8px", background: "linear-gradient(135deg,#f59e0b,#fbbf24)", color: "#000", cursor: "pointer", fontSize: "12px" };