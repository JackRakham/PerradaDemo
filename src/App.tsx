
// Estilos globales que necesitarás en tu index.css


const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-red-600 p-4 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">La Perrada de Rodris</div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-white">Inicio</a>
        <a href="#menu" className="text-white">Menú</a>
        <a href="#nosotros" className="text-white">Nosotros</a>
        <a href="#contacto" className="text-white">Contacto</a>
      </div>
    </div>
  </nav>
);

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
  <section id="nosotros" className="w-full py-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://live.staticflickr.com/8050/8125965665_b621fcafeb_b.jpg"
          alt="Nuestro local"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
        <p className="text-gray-600 mb-6">
          En La Perrada de Rodris, nos enorgullece servir los hot dogs más
          deliciosos de la ciudad desde hace más de 5 años. Cada perro caliente
          es preparado con dedicación y los mejores ingredientes.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Nuestras Especialidades:</h3>
          <ul className="space-y-2">
            {['Hot Dogs Tradicionales', 'Perros Especiales', 'Combos Familiares'].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">La Perrada de Rodris</h3>
          <p>Los mejores hot dogs de la ciudad</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Horario</h3>
          <p>Lunes a Sábado: 12:00 PM - 10:00 PM</p>
          <p>Domingo: 2:00 PM - 9:00 PM</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@perradarodris.com</p>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="relative w-full overflow-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
    </main>
    <Footer />
  </div>
);

export default App;