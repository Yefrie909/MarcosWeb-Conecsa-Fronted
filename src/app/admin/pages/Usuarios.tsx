import { useEffect, useState } from 'react';

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/usuarios")
            .then(res => res.json())
            .then(data => setUsuarios(data))
            .catch(err => console.error("Error:", err));
    }, []);

    return (
        <div>
            <h2>Lista de Clientes Registrados</h2>
            <table>
                <thead>
                    <tr><th>ID</th><th>Nombre</th><th>Email</th></tr>
                </thead>
                <tbody>
                    {usuarios.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
