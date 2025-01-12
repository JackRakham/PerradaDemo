import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselChavo extends Component {
    render() {
        return (
            <section className="w-full py-16 pt-4 pb-4 sm:pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Conoce la vecindad del chavo del 8!</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Columna del carrusel */}


                        {/* Columna del texto */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Revive tu infancia</h3>
                                <p className="text-gray-600">
                                    En esta esquina del restaurante, te transportamos a la vecindad más famosa de la televisión.
                                    Disfruta de tus platillos favoritos rodeado del encanto de El Chavo del 8.
                                    ¡Ideal para fotos inolvidables y momentos llenos de nostalgia! 📸✨
                                </p><br></br>
                                <h3 className="text-3xl pt-2 font-bold mb-4">Un rincón lleno de magia y sonrisas 🌟</h3>
                                <p className="text-gray-600">
                                    Cada detalle de este espacio ha sido creado para que sientas la calidez y alegría de la vecindad más querida.
                                    Desde el emblemático barril hasta los colores vibrantes, aquí no solo comes, ¡también vives una experiencia única!
                                    Perfecto para quienes buscan un momento especial lleno de recuerdos y diversión. 🎉❤️
                                </p>

                            </div>



                        </div>

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
                                        src="vecindad1.jpeg"
                                        alt="Vecindad1"
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="h-96">
                                    <img
                                        src="vecindad2.jpeg"
                                        alt="Vecindad2"
                                        className="h-full object-cover"
                                    />
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default CarouselChavo;