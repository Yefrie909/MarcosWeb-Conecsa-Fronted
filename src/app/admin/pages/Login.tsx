import { useState } from 'react';

// Importamos respetando cómo fue creado cada archivo en tu estructura
import { Pedidos } from './Pedidos'; // Con llaves porque usa export común
import Productos from './Productos';   // Sin llaves porque usa export default
import Usuarios from './Usuarios';     // Sin llaves porque usa export default

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [estaLogueado, setEstaLogueado] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const manejarLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Validación de respaldo directa (Código duro solicitado)
        if (usuario === 'admin' && clave === 'admin123') {
            setEstaLogueado(true);
            return;
        }

        // 2. Si no es el admin local, intenta validar dinámicamente con tu MySQL
        fetch("http://localhost:8080/api/administradores")
            .then(res => {
                if (!res.ok) throw new Error("Error en la respuesta de red");
                return res.json();
            })
            .then((admins: any[]) => {
                const encontrado = admins.find(a => a.usuario === usuario && a.clave === clave);
                if (encontrado) {
                    setEstaLogueado(true);
                } else {
                    alert("Usuario o clave incorrectos.");
                }
            })
            .catch(err => {
                console.error("Error de conexión:", err);
                alert("Credenciales incorrectas o el servidor Backend está desconectado.");
            });
    };

    const cerrarSesion = () => {
        setEstaLogueado(false);
        setOpcionSeleccionada('');
    };

    // Si el login es exitoso, muestra tu Dashboard modularizado
    if (estaLogueado) {
        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                    <h2>Panel de Administración - CONECSA</h2>
                    <button onClick={cerrarSesion} style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
                        Cerrar Sesión
                    </button>
                </header>

                {/* Menú de navegación principal */}
                <nav style={{ display: 'flex', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
                    <button onClick={() => setOpcionSeleccionada('pedidos')} style={btnEstilo}>📦 Pedidos</button>
                    <button onClick={() => setOpcionSeleccionada('productos')} style={btnEstilo}>🏷️ Productos</button>
                    <button onClick={() => setOpcionSeleccionada('usuarios')} style={btnEstilo}>👥 Usuarios</button>
                </nav>

                {/* Renderizado de tus componentes .tsx individuales */}
                <main style={{ background: '#f9f9f9', padding: '20px', borderRadius: '6px', border: '1px solid #ddd' }}>
                    {opcionSeleccionada === 'pedidos' && <Pedidos />}
                    {opcionSeleccionada === 'productos' && <Productos />}
                    {opcionSeleccionada === 'usuarios' && <Usuarios />}
                    {opcionSeleccionada === '' && (
                        <p style={{ color: '#666' }}>Bienvenido. Selecciona una opción del menú superior.</p>
                    )}
                </main>
            </div>
        );
    }

    // Vista de formulario de ingreso
    return (
        <div style={{ maxWidth: '350px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
            <form onSubmit={manejarLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h2 style={{ textAlign: 'center' }}>Login Administrativo</h2>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Usuario:</label>
                    <input type="text" style={inputEstilo} onChange={e => setUsuario(e.target.value)} required />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
                    <input type="password" style={inputEstilo} onChange={e => setClave(e.target.value)} required />
                </div>
                <button type="submit" style={{ background: '#007bff', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Ingresar al Sistema
                </button>
            </form>
        </div>
    );
}

const btnEstilo = {
    padding: '10px 20px',
    cursor: 'pointer',
    background: '#f0f0f0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontWeight: 'bold' as const
};

const inputEstilo = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box' as const,
    borderRadius: '4px',
    border: '1px solid #ccc'
};
