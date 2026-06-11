import { useEffect, useState } from "react";

interface Producto {
  idProducto?: number;
  nombre: string;
  categoria: string;
  marca: string;
  precio: number;
  stock: number;
  color: string;
  tamano: string;
  imagen: string;
  descripcion: string;
}

const DATOS_INICIALES = {
  tubos: { marcas: ["Pavco", "Tuboplast", "Nicoll"], tamanos: ['1/2" pulgada', '3/4" pulgada', '1" pulgada', '2" pulgadas', '4" pulgadas (Desagüe)'], colores: ["Plomo", "Blanco", "Naranja"] },
  pegamento: { marcas: ["Sika", "Pega-Fuerte", "Oatey"], tamanos: ["Regular (1/4 Galón)", "Grande (1 Galón)", "Tubo 100g", "Cartucho 300ml"], colores: ["Transparente", "Azul", "Amarillo", "Gris"] },
  herramientas: { marcas: ["Truper", "Pedrollo", "Bosch", "Stanley"], tamanos: ["0.5 ", "1.0", "1.5 ", "Estándar"], colores: ["Naranja", "Azul", "Negro"] },
  clavos: { marcas: ["Ancora", "Aceros Arequipa"], tamanos: ['1" pulgada', '2" pulgadas', '3" pulgadas'], colores: ["Acero Natural", "Galvanizado"] }
};

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [idEditando, setIdEditando] = useState<number | null>(null);

  // MEMORIA PERSISTENTE DE CATEGORÍAS
  const [diccionario, setDiccionario] = useState(() => {
    const guardado = localStorage.getItem("misCategorias");
    return guardado ? JSON.parse(guardado) : DATOS_INICIALES;
  });

  // ESTADOS DE CONFIGURACIÓN NUEVA CATEGORÍA
  const [nuevaCat, setNuevaCat] = useState("");
  const [nuevasMarcas, setNuevasMarcas] = useState("");
  const [nuevasMedidas, setNuevasMedidas] = useState("");
  const [nuevosColores, setNuevosColores] = useState("");
  const [mostrandoInput, setMostrandoInput] = useState(false);
  
  const [preview, setPreview] = useState<string | null>(null);
  const [categoria, setCategoria] = useState("tubos");
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
    const opciones = diccionario[categoria as keyof typeof diccionario];
    if (opciones) {
      setMarca(opciones.marcas[0] || "");
      setTamano(opciones.tamanos[0] || "");
      setColor(opciones.colores[0] || "");
    }
  }, [categoria, diccionario]);

  const nombreFinalConstruido = `${nombreEspecifico} ${marca} ${tamano} ${color ? `Color ${color}` : ""}`.trim();
  const descripcionAutomatica = `Producto de alta calidad categoría ${categoria}. Marca: ${marca}. Medidas: ${tamano}.`;

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json();
      setProductos(data);
    } catch (error) { console.error("Error al obtener productos:", error); }
  };

  useEffect(() => { obtenerProductos(); }, []);

  // FUNCIÓN PARA ACTUALIZAR Y GUARDAR EN MEMORIA
  const agregarCategoriaCompleta = () => {
    if (nuevaCat && !diccionario[nuevaCat.toLowerCase() as keyof typeof diccionario]) {
      const nuevoDiccionario = {
        ...diccionario,
        [nuevaCat.toLowerCase()]: { 
          marcas: nuevasMarcas.split(",").map(i => i.trim()), 
          tamanos: nuevasMedidas.split(",").map(i => i.trim()), 
          colores: nuevosColores.split(",").map(i => i.trim()) 
        }
      };
      setDiccionario(nuevoDiccionario);
      localStorage.setItem("misCategorias", JSON.stringify(nuevoDiccionario));
      setNuevaCat(""); setNuevasMarcas(""); setNuevasMedidas(""); setNuevosColores(""); setMostrandoInput(false);
    }
  };

  const limpiarFormulario = () => {
    setIdEditando(null); setNombreEspecifico(""); setCategoria("tubos"); setPrecio(0); setStock(0);
    setArchivoImagen(null); setPreview(null);
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const guardarProducto = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nombreFinalConstruido);
    formData.append("categoria", categoria);
    formData.append("marca", marca);
    formData.append("precio", String(precio));
    formData.append("stock", String(stock));
    formData.append("color", color);
    formData.append("tamano", tamano);
    formData.append("descripcion", descripcionAutomatica);
    if (archivoImagen) formData.append("archivoImagen", archivoImagen);

    try {
      let respuesta = await fetch(idEditando ? `${API_URL}/${idEditando}` : API_URL, { method: idEditando ? "PUT" : "POST", body: formData });
      if (respuesta.ok) {
        alert(idEditando ? "✅ Producto actualizado" : "✅ Producto registrado");
        limpiarFormulario();
        setTimeout(obtenerProductos, 300);
      }
    } catch (error) { console.error("Error al guardar:", error); }
  };

  return (
    <div style={{ display: "flex", gap: "30px", padding: "30px", fontFamily: "sans-serif", background: "#0f172a", minHeight: "100vh", color: "#fff" }}>
      
      <div style={{ flex: "1", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)", padding: "25px", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "700" }}>{idEditando ? " Producto" : " Registro de Producto"}</h2>

        {/* ASISTENTE DE CATEGORÍA AGREGADO */}
        {/* ASISTENTE DE CATEGORÍA MEJORADO */}
        <div style={{ marginBottom: "20px", background: "rgba(255,255,255,0.03)", padding: "15px", borderRadius: "12px", border: "1px solid #334155" }}>
            {!mostrandoInput ? (
                <button onClick={() => setMostrandoInput(true)} style={{ background: "transparent", border: "1px dashed #60a5fa", color: "#60a5fa", padding: "10px", borderRadius: "8px", cursor: "pointer", width: "100%" }}>+ Nueva Categoría</button>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <input placeholder="Nombre Categoría" value={nuevaCat} onChange={(e) => setNuevaCat(e.target.value)} style={modernInput} />
                    <input placeholder="Marcas (ej: Sika, Pavco)" value={nuevasMarcas} onChange={(e) => setNuevasMarcas(e.target.value)} style={modernInput} />
                    
                    {/* SECCIÓN DE MEDIDAS CON BOTONES RÁPIDOS */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <input type="text" placeholder="Valor medida (ej: 1/2)" value={nuevasMedidas} onChange={(e) => setNuevasMedidas(e.target.value)} style={{...modernInput, flex: 2}} />
                            <button onClick={() => setNuevasMedidas(nuevasMedidas + ' pulgada')} style={{flex: 1, background: "#475569", border: "none", color: "white", borderRadius: "5px", cursor: "pointer", fontSize: "11px"}}>Pulgada</button>
                            <button onClick={() => setNuevasMedidas(nuevasMedidas + ' Galón')} style={{flex: 1, background: "#475569", border: "none", color: "white", borderRadius: "5px", cursor: "pointer", fontSize: "11px"}}>Galón</button>
                        </div>
                    </div>

                    <input placeholder="Colores (ej: Blanco, Plomo)" value={nuevosColores} onChange={(e) => setNuevosColores(e.target.value)} style={modernInput} />
                    
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={agregarCategoriaCompleta} style={{ flex: 1, background: "#2563eb", border: "none", color: "white", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>Guardar</button>
                        <button onClick={() => setMostrandoInput(false)} style={{ background: "transparent", border: "1px solid #475569", color: "white", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>X</button>
                    </div>
                </div>
            )}
        </div>
        

        <form onSubmit={guardarProducto} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <label style={labelStyle}>1. Categoría</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={modernInput}>
            {Object.keys(diccionario).map((c) => <option key={c} value={c}>{c.toUpperCase()}</option>)}
          </select>

          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
             <div><label style={labelStyle}>Marca</label><select value={marca} onChange={(e) => setMarca(e.target.value)} style={modernInput}>{diccionario[categoria]?.marcas.map((m:string) => <option key={m} value={m}>{m}</option>)}</select></div>
             <div><label style={labelStyle}>Medida</label><select value={tamano} onChange={(e) => setTamano(e.target.value)} style={modernInput}>{diccionario[categoria]?.tamanos.map((t:string) => <option key={t} value={t}>{t}</option>)}</select></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
             <div><label style={labelStyle}>Color</label><select value={color} onChange={(e) => setColor(e.target.value)} style={modernInput}>{diccionario[categoria]?.colores.map((c:string) => <option key={c} value={c}>{c}</option>)}</select></div>
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
                <td style={tableCell}><button onClick={() => { setIdEditando(p.idProducto || null); setCategoria(p.categoria); }} style={buttonEditModern}>Modificar</button></td>
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