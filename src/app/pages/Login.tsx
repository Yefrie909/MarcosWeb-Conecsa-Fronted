
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import LogoConecsa from "../../assets/Marcas/Logo.png";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "", rememberMe: false });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegConfPass, setShowRegConfPass] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData({ ...loginData, [name]: type === "checkbox" ? checked : value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login intentado:", loginData);
    setIsLoading(false);
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: registerData.firstName, // Debe ser idéntico al campo en Usuario.java
          lastName: registerData.lastName,   // Debe ser idéntico al campo en Usuario.java
          email: registerData.email,
          password: registerData.password
        }),
      });

      if (response.ok) {
        alert("✅ Usuario registrado correctamente.");
        setRegisterData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
        setIsSignUp(false);
      } else {
        const errorData = await response.text();
        alert("❌ Error en el servidor: " + errorData);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar con el servidor. Asegúrate de que el puerto 8080 esté abierto.");
    } finally {
      setIsLoading(false);
    }
};

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center font-sans antialiased p-4">
      <div className="relative w-full max-w-4xl h-[620px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* CAPA DE FORMULARIOS */}
        <div className="absolute inset-0 w-full h-full flex">
          
          {/* LOGIN */}
          <div className="w-1/2 h-full flex flex-col justify-center px-14 space-y-5 bg-white">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Iniciar Sesión</h2>
            </div>
            <form onSubmit={handleSubmitLogin} className="space-y-4">
              <input type="email" name="email" placeholder="Email" required value={loginData.email} onChange={handleLoginChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />
              <div className="relative">
                <input type={showLoginPass ? "text" : "password"} name="password" placeholder="Password" required value={loginData.password} onChange={handleLoginChange} className="w-full h-11 pl-4 pr-10 text-sm bg-gray-100 rounded-lg" />
              </div>
              <button type="submit" disabled={isLoading} className="h-11 w-full bg-slate-800 text-white font-semibold rounded-lg uppercase flex items-center justify-center">
                {isLoading ? <Loader2 className="animate-spin" /> : "Iniciar Sesión"}
              </button>
            </form>
          </div>

          {/* REGISTRO */}
          <div className="w-1/2 h-full flex flex-col justify-center px-14 space-y-4 bg-white">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Registrarse</h2>
            </div>
            <form onSubmit={handleSubmitRegister} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" name="firstName" placeholder="Nombre" required value={registerData.firstName} onChange={handleRegisterChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />
                <input type="text" name="lastName" placeholder="Apellido" required value={registerData.lastName} onChange={handleRegisterChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />
              </div>
              <input type="email" name="email" placeholder="Email" required value={registerData.email} onChange={handleRegisterChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />
              <input type="password" name="password" placeholder="Password" required value={registerData.password} onChange={handleRegisterChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />
              <input type="password" name="confirmPassword" placeholder="Confirmar Password" required value={registerData.confirmPassword} onChange={handleRegisterChange} className="w-full h-11 px-4 text-sm bg-gray-100 rounded-lg" />

              <button type="submit" disabled={isLoading} className="h-11 w-full bg-slate-800 text-white font-semibold rounded-lg uppercase flex items-center justify-center">
                {isLoading ? <Loader2 className="animate-spin" /> : "Registrarse"}
              </button>
            </form>
          </div>
        </div>

        {/* PANEL DESLIZANTE */}
        <div className={`absolute top-0 bottom-0 w-1/2 bg-slate-800 text-white transition-all duration-700 ease-in-out z-30 flex flex-col items-center justify-center p-12 text-center ${isSignUp ? "left-0 translate-x-0 rounded-r-[140px]" : "left-0 translate-x-full rounded-l-[140px]"}`}>
          <img src={LogoConecsa} alt="Logo" className="h-16 mb-6 brightness-200" />
          <h2 className="text-4xl font-bold mb-6">{isSignUp ? "¡Hola!" : "¡Bienvenido!"}</h2>
          <button onClick={() => setIsSignUp(!isSignUp)} className="px-10 py-3 border border-white/40 rounded-xl hover:bg-white hover:text-slate-900 transition-all">
            {isSignUp ? "Iniciar Sesión" : "Registrarse"}
          </button>
        </div>
      </div>
    </div>
  );
};