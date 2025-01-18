import { useState } from 'react';
import { ListIcon, GridIcon } from 'lucide-react';

// Definición de tipos
type MenuItem = {
    name: string;
    price: number;
    description?: string;
    imageUrl?: string;
};

type MenuCategory = {
    category: string;
    items: MenuItem[];
};

// Datos del menú
const menuData: MenuCategory[] = [
    {
        category: "ENTRADA",
        items: [
            { name: "Porción criolla", price: 6000 },
            { name: "Nachos con ensalada de atún", price: 14000 },
            { name: "Nachos con mazorcada", price: 14000 },
            { name: "Salchicriolla", price: 14000 },
            { name: "Choricriolla", price: 14000 },
        ]
    },
    {
        category: "PINCHOS",
        items: [
            { name: "Pincho de Alas", price: 9000 },
            { name: "Pincho de Mollejas", price: 6000 },
            { name: "Brocheta de Costillas de Cerdo", price: 14000 },
            { name: "Brocheta de Pechuga", price: 14000 },
            { name: "Chorizo", price: 6000 },
            { name: "Pepito criolla", price: 9000 },
        ]
    },
    {
        category: "COMIDAS RAPIDAS",
        items: [
            { name: "Hamburguesa de patacón", price: 16000 },
            { name: "Hamburguesa sencilla", price: 14000 },
            { name: "Hamburguesa en combo", price: 18000 },
            { name: "Salchipapa", price: 14000 },
            { name: "Choripapa", price: 14000 },
            { name: "Perro caliente", price: 10000 },
            { name: "Choriperra", price: 10000 },
            { name: "Salchichoripapa", price: 18000 },
            { name: "Picado ensalada de atún y huevo", price: 26000 },
            { name: "RapiAlas", price: 22000 },
        ]
    },
    {
        category: "PLATOS A LA CARTA",
        items: [
            { name: "Mazorcada Mixta", price: 20000 },
            { name: "Carne a la plancha", price: 24000 },
            { name: "Carne al horno", price: 28000 },
            { name: "Pechuga a la plancha", price: 24000 },
            { name: "Churrasco", price: 32000 },
            { name: "Punta de anca", price: 28000 },
            { name: "Lomo de cerdo", price: 28000 },
            { name: "Trifásico de Costillas, Cerdo y Res", price: 36000 },
        ]
    },
    {
        category: "BEBIDAS",
        items: [
            { name: "Cítrica", price: 6000 },
            { name: "Naranjada Jarra", price: 12000 },
            { name: "Limonada Jarra", price: 12000 },
            { name: "Jugo en agua vaso", price: 4000 },
            { name: "Jugo en leche vaso", price: 6000 },
            { name: "Jarra de jugo en agua", price: 10000 },
            { name: "Jarra de jugo en leche", price: 12000 },
        ]
    }
];

const MenuPerrada = () => {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');



    return (
        <div id="menú" className="relative min-h-[300px] w-full overflow-hidden bg-gradient-to-br from-green-500 via-orange-400 to-green-500">
            <div
                className="absolute inset-0 animate-slide-right"
                style={{
                    backgroundImage: `
            linear-gradient(to right, transparent 90%, rgba(255,255,255,0.1) 90%),
            linear-gradient(to bottom, transparent 90%, rgba(255,255,255,0.1) 90%)
          `,
                    backgroundSize: '50px 50px',
                }}
            />
            <div
                className="absolute inset-0 animate-slide-left"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 20px,
              transparent 20px,
              transparent 40px
            )
          `,
                }}
            />
            <div
                className="absolute inset-0 animate-slide-up"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.1) 0px,
              rgba(255,255,255,0.1) 2px,
              transparent 2px,
              transparent 20px
            )
          `,
                }}
            />
            <div className="relative z-10 p-8">
                <section id="menu" className="min-h-screen mt-16 rounded-2xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Nuestro Menú</h2>
                            <button
                                onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-sm"
                            >
                                {viewMode === 'list' ? (
                                    <><GridIcon size={20} /> Ver cuadrícula</>
                                ) : (
                                    <><ListIcon size={20} /> Ver lista</>
                                )}
                            </button>
                        </div>

                        {viewMode === 'list' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {menuData.map((section) => (
                                    <div key={section.category} className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
                                        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
                                            <h3 className="text-xl font-bold text-white">{section.category}</h3>
                                        </div>
                                        <div className="p-6">
                                            <div className="space-y-4">
                                                {section.items.map((item) => (
                                                    <div key={item.name} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                                                        <span className="text-gray-800 font-medium">{item.name}</span>
                                                        <span className="text-red-600 font-semibold">
                                                            ${item.price.toLocaleString('es-CO')}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {menuData.flatMap((section) =>
                                    section.items.map((item) => (
                                        <div key={item.name} className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                                                <img
                                                    src="/api/placeholder/400/320"
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                                                <p className="text-red-600 font-bold">
                                                    ${item.price.toLocaleString('es-CO')}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MenuPerrada;