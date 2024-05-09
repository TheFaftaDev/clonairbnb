import Filtros from "./components/Filtros";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Casas from "./components/Casas";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filtros/>
        <Casas />
      </div>
      <Footer />
    </div>
  );
}

export default App;

