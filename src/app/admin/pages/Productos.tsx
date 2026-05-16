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

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [idEditando, setIdEditando] = useState<number | null>(null);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("tubos");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);
  const [color, setColor] = useState("");
  const [tamano, setTamano] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [archivoImagen, setArchivoImagen] = useState<File | null>(null);

  const API_URL = "http://localhost:8080/api/productos";

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch(API_URL);
      const data = await respuesta.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const limpiarFormulario = () => {
    setIdEditando(null);
    setNombre("");
    setCategoria("tubos");
    setMarca("");
    setPrecio(0);
    setStock(0);
    setColor("");
    setTamano("");
    setDescripcion("");
    setArchivoImagen(null);

    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement;

    if (fileInput) fileInput.value = "";
  };

  const guardarProducto = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("categoria", categoria);
    formData.append("marca", marca);
    formData.append("precio", String(precio));
    formData.append("stock", String(stock));
    formData.append("color", color);
    formData.append("tamano", tamano);
    formData.append("descripcion", descripcion);

    if (archivoImagen) {
      formData.append("archivoImagen", archivoImagen);
    }

    try {
      if (idEditando) {
        await fetch(`${API_URL}/${idEditando}`, {
          method: "PUT",
          body: formData,
        });

        alert("Producto actualizado correctamente");
      } else {
        await fetch(API_URL, {
          method: "POST",
          body: formData,
        });

        alert("Producto registrado correctamente");
      }

      limpiarFormulario();
      obtenerProductos();
    } catch (error) {
      console.error("Error al guardar producto:", error);
      alert("Ocurrió un error al guardar el producto");
    }
  };

  const editarProducto = (producto: Producto) => {
    setIdEditando(producto.idProducto || null);
    setNombre(producto.nombre);
    setCategoria(producto.categoria);
    setMarca(producto.marca);
    setPrecio(producto.precio);
    setStock(producto.stock);
    setColor(producto.color);
    setTamano(producto.tamano);
    setDescripcion(producto.descripcion);
  };

  const eliminarProducto = async (idProducto?: number) => {
    if (!idProducto) return;

    const confirmar = confirm(
      "¿Seguro que deseas eliminar este producto?"
    );

    if (!confirmar) return;

    try {
      await fetch(`${API_URL}/${idProducto}`, {
        method: "DELETE",
      });

      alert("Producto eliminado correctamente");

      obtenerProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      alert("Ocurrió un error al eliminar el producto");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "30px",
        fontFamily: "sans-serif",
        background: "#0f172a",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* FORMULARIO */}
      <div
        style={{
          flex: "1",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          padding: "25px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          {idEditando
            ? "✏️ Editar Producto"
            : "🚀 Registrar Producto"}
        </h2>

        <form
          onSubmit={guardarProducto}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={modernInput}
          >
            <option value="tubos">🚰 Tubos y Tuberías</option>
            <option value="clavos">📌 Clavos y Fijaciones</option>
            <option value="pegamento">
              🧪 Pegamentos y Selladores
            </option>
            <option value="herramientas">
              🛠 Herramientas
            </option>
          </select>

          <input
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={modernInput}
          />

          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            style={modernInput}
          />

          <input
            type="number"
            placeholder="Precio S/."
            value={precio || ""}
            onChange={(e) => setPrecio(Number(e.target.value))}
            required
            style={modernInput}
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock || ""}
            onChange={(e) => setStock(Number(e.target.value))}
            required
            style={modernInput}
          />

          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={modernInput}
          />

          <input
            type="text"
            placeholder="Tamaño / Medida / Metraje"
            value={tamano}
            onChange={(e) => setTamano(e.target.value)}
            style={modernInput}
          />

          <label
            style={{
              fontSize: "13px",
              color: "#94a3b8",
              marginTop: "5px",
            }}
          >
            📁 Seleccionar Imagen
          </label>

          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setArchivoImagen(e.target.files[0]);
              }
            }}
            style={modernInput}
          />

          <textarea
            placeholder="Descripción del producto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={{
              ...modernInput,
              minHeight: "100px",
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={buttonPrimaryModern}
          >
            {idEditando
              ? "Actualizar Producto"
              : "Subir Producto a MySQL"}
          </button>

          {idEditando && (
            <button
              type="button"
              onClick={limpiarFormulario}
              style={buttonCancelModern}
            >
              Cancelar edición
            </button>
          )}
        </form>
      </div>

      {/* TABLA */}
      <div
        style={{
          flex: "2",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          padding: "25px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
          overflowX: "auto",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          📦 Inventario General
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 12px",
          }}
        >
          <thead>
            <tr>
              <th style={tableHeader}>ID</th>
              <th style={tableHeader}>Producto</th>
              <th style={tableHeader}>Categoría</th>
              <th style={tableHeader}>Marca</th>
              <th style={tableHeader}>Precio</th>
              <th style={tableHeader}>Stock</th>
              <th style={tableHeader}>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr
                key={producto.idProducto}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  transition: "0.3s",
                }}
              >
                <td style={tableCell}>
                  {producto.idProducto}
                </td>

                <td style={tableCell}>
                  <strong
                    style={{
                      fontSize: "15px",
                      color: "#fff",
                    }}
                  >
                    {producto.nombre}
                  </strong>

                  <br />

                  <small style={{ color: "#94a3b8" }}>
                    {producto.descripcion}
                  </small>
                </td>

                <td style={tableCell}>
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg,#3b82f6,#06b6d4)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {producto.categoria?.toUpperCase()}
                  </span>
                </td>

                <td style={tableCell}>
                  {producto.marca}
                </td>

                <td style={tableCell}>
                  <strong>
                    S/. {producto.precio}
                  </strong>
                </td>

                <td style={tableCell}>
                  <span
                    style={{
                      background:
                        producto.stock > 0
                          ? "rgba(34,197,94,0.15)"
                          : "rgba(239,68,68,0.15)",
                      color:
                        producto.stock > 0
                          ? "#22c55e"
                          : "#ef4444",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {producto.stock}
                  </span>
                </td>

                <td style={tableCell}>
                  <button
                    onClick={() =>
                      editarProducto(producto)
                    }
                    style={buttonEditModern}
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminarProducto(
                        producto.idProducto
                      )
                    }
                    style={buttonDeleteModern}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            {productos.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    padding: "30px",
                    textAlign: "center",
                    color: "#94a3b8",
                  }}
                >
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const modernInput = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box" as const,
};

const tableHeader = {
  textAlign: "left" as const,
  padding: "14px",
  color: "#94a3b8",
  fontSize: "13px",
  textTransform: "uppercase" as const,
};

const tableCell = {
  padding: "16px",
  color: "#e2e8f0",
};

const buttonPrimaryModern = {
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#2563eb,#06b6d4)",
  color: "#fff",
  fontWeight: "bold" as const,
  cursor: "pointer",
  fontSize: "14px",
  transition: "0.3s",
};

const buttonCancelModern = {
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
};

const buttonEditModern = {
  padding: "8px 14px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
  color: "#000",
  cursor: "pointer",
  fontWeight: "bold" as const,
  marginRight: "8px",
};

const buttonDeleteModern = {
  padding: "8px 14px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg,#ef4444,#dc2626)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold" as const,
};