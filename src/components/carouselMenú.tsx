import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselCarta extends Component {
    render() {
        return (
            <section className="w-full py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Nuestras Especialidades</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Columna del carrusel */}
                        <div className="w-full md:w-1/2">
                            <Carousel
                                showArrows={true}
                                showStatus={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3000}
                                className="rounded-lg overflow-hidden shadow-xl"
                            >
                                <div className="h-96">
                                    <img
                                        src="assets/hamburguesa.jpeg"
                                        alt="Hamburguesa"
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="h-96">
                                    <img
                                        src="assets/limonada.jpeg"
                                        alt="Limonada"
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="h-96">
                                    <img
                                        src="assets/salchipapa.jpeg"
                                        alt="Salchipapa"
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="h-96">
                                    <img
                                        src="assets/perro.jpeg"
                                        alt="Perro Caliente"
                                        className="h-full object-cover"
                                    />
                                </div>
                            </Carousel>
                        </div>

                        {/* Columna del texto */}
                        <div className="w-full md:w-1/2 space-y-6">

                            <div>
                                <h3 className="text-2xl font-bold mb-4">Comida rapida</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                        Perros Tradicionales - Con nuestras salsas especiales
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                        Salchipapas - Combinaciones únicas de sabores
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                        Empanadas - Sabor único
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                        Combos Familiares - Para compartir con tus seres queridos
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                        Bebidas Refrescantes - El complemento perfecto
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Calidad Garantizada</h3>
                                <p className="text-gray-600">
                                    Todos nuestros productos son preparados al momento para garantizar
                                    la frescura y el mejor sabor en cada visita. Utilizamos ingredientes
                                    de primera calidad y recetas propias que nos distinguen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default CarouselCarta;