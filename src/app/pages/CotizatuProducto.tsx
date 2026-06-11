import { ClipboardEdit, Building2, Phone, Mail, FileText, CheckCircle2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export function CotizatuProducto() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [items, setItems] = useState([{ producto: "Tuberías PVC Saneamiento", cantidad: "10" }]);
  const [formData, setFormData] = useState({
    ruc: "",
    razonSocial: "",
    contacto: "",
    telefono: "",
    correo: "",
    mensaje: ""
  });

  const handleAddItem = () => {
    setItems([...items, { producto: "Tuberías PVC Saneamiento", cantidad: "1" }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de Cotización:", { ...formData, productos: items });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Superior */}
      <div className="bg-[#4682B4] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Cotiza tu Producto</h1>
          <p className="text-xl opacity-90">Solicita presupuestos personalizados para tus obras y requerimientos técnicos</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <ClipboardEdit className="w-6 h-6 text-[#4682B4]" /> Formulario de Cotización Corporativa
          </h2>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-md text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-2xl font-bold">¡Cotización Recibida!</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Nuestro departamento comercial evaluará tu lista de materiales y te enviará un presupuesto formal en formato PDF al correo ingresado.
              </p>
              <button 
                onClick={() => { setFormSubmitted(false); setItems([{ producto: "Tuberías PVC Saneamiento", cantidad: "10" }]); }} 
                className="mt-2 bg-[#4682B4] text-white px-5 py-2 rounded-md hover:bg-[#36648B] transition text-sm font-medium"
              >
                Crear nueva cotización
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Bloque 1: Datos de la Empresa */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                <h3 className="text-md font-bold text-gray-700 flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#4682B4]" /> Datos Personales o de Empresa
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">RUC / DNI *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      value={formData.ruc}
                      onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                      placeholder="Ej. 20123456789"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Razon Social / Nombre Completo *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      value={formData.razonSocial}
                      onChange={(e) => setFormData({...formData, razonSocial: e.target.value})}
                      placeholder="Ej. Constructora del Centro S.A.C."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Persona de Contacto *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      value={formData.contacto}
                      onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                      placeholder="Ej. Ing. Carlos Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Teléfono o Celular *</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Correo para Enviar Proforma *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                      value={formData.correo}
                      onChange={(e) => setFormData({...formData, correo: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Bloque 2: Lista Dinámica de Requerimientos */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-bold text-gray-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#4682B4]" /> Lista de Materiales a Cotizar
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded hover:bg-emerald-100 transition font-medium"
                  >
                    <Plus className="w-3 h-3" /> Añadir Fila
                  </button>
                </div>

                {items.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center bg-white p-2 border border-gray-200 rounded-md">
                    <div className="flex-1">
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#4682B4]"
                        value={item.producto}
                        onChange={(e) => handleItemChange(index, "producto", e.target.value)}
                      >
                        <option value="Tuberías PVC Saneamiento">Tuberías PVC Saneamiento</option>
                        <option value="Conexiones de Alta Presión">Conexiones e Inyecciones de Alta Presión</option>
                        <option value="Cajas de Registro y Buzones">Cajas de Registro, Tapas y Buzones</option>
                        <option value="Accesorios de Redes de Agua">Accesorios de Redes de Agua Potable</option>
                        <option value="Válvulas e Instrumentación">Válvulas e Instrumentación Hidráulica</option>
                      </select>
                    </div>
                    <div className="w-24">
                      <input
                        type="number"
                        min="1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-center focus:outline-none focus:ring-1 focus:ring-[#4682B4]"
                        value={item.cantidad}
                        onChange={(e) => handleItemChange(index, "cantidad", e.target.value)}
                        required
                      />
                    </div>
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Especificaciones Extra */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Notas o Requerimientos Especiales (Opcional)</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4682B4] focus:outline-none text-sm"
                  placeholder="Especifica marcas, diámetros, presiones (NTP / ISO) o plazos de entrega que requieras..."
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4682B4] text-white py-3 rounded-md hover:bg-[#36648B] transition font-medium shadow-sm"
              >
                Solicitar Cotización Formal
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}