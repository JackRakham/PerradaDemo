
import CarouselChavo from "./components/carouselChavo";
import CarouselCarta from "./components/carouselMenú";
import { Route, Routes, useNavigate } from "react-router-dom";
import MenuPerrada from "./components/menu";


const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, sectionId: string) => {
    navigate(path); // Navega a la página correspondiente
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Desplázate suavemente a la sección
        }
      }, 100); // Espera un breve momento para asegurarte de que la página cargue
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">La Perrada de Rodris</div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => handleNavigation("/", "")} className="text-white">
            Inicio
          </button>
          <button onClick={() => handleNavigation("/menu", "menú")} className="text-white">
            Menú
          </button>
          <button onClick={() => handleNavigation("/", "chavo")} className="text-white">
            El Chavo
          </button>
          <button onClick={() => handleNavigation("/", "nosotros")} className="text-white">
            Nosotros
          </button>
          <button onClick={() => handleNavigation("/", "contacto")} className="text-white">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
const Hero = () => (
  <div className="relative w-full h-screen">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0">
      <img
        src="https://cdn.aarp.net/content/dam/aarp/food/recipes/2018/05/1140-colombian-empanadas-esp.jpg"
        alt="Hot Dogs"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
      <div className="text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Las mejores empanadas de Tauramena</h1>
        <p className="text-xl mb-8">
          Disfruta de nuestra variada seleccion de comida rapida en esos antojos de la noche
        </p>
        <a
          href="#menu"
          className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Ver Menú
        </a>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="nosotros" className="w-full py-16 pb-4 sm:pb-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="fachada1.jpg"
          alt="Nuestro local"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
        <p className="text-gray-600 mb-6">
          En La Perrada de Rodris, nos enorgullece servir la comida rapida
          mas deliciosa del pueblo desde hace más de 5 años. Cada perro caliente, hamburguesa, salchipapa o empanada
          es preparado con dedicación y los mejores ingredientes. Somos la mejor opción para esos antojos nocturnos que no se pueden evitar.
        </p>
        <div className="space-y-4">
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white py-8" id="contacto">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">La Perrada de Rodris</h3>
          <p>Las mejores empanadas</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Horario</h3>
          <p>Lunes a Sábado: 5:00 PM - 3:00 AM</p>
          <p>Domingo: 3:00 PM - 1:00 AM</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>Teléfono: (+57) 311 2649655</p>
          <p>Email: LaPerradaRodris@hotmail.com</p>
        </div>
      </div>
    </div>
  </footer>
);

const Landing = () => (
  <main>
    <div className="relative z-10">
      <Hero />
      <About />
      <div className="space-y-0">
        <CarouselCarta></CarouselCarta>
        <CarouselChavo></CarouselChavo>
      </div>
    </div>
  </main>
)

const App = () => (
  <div className="relative w-full overflow-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<MenuPerrada />} />
    </Routes>
    <Footer />
  </div>
);

export default App;