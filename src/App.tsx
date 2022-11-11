import './App.css';
import Header from "./Layout/Header";
import Goals from "./Layout/Goals";
import Services from './Layout/Services';
import Testimonials from './Layout/Testimonials';
import Gallery from './Layout/Gallery';
import Footer from './Layout/Footer';
function App() {
  return (<>
    <Header />
    <main className="font-barlow">
      <Goals />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
    <Footer />
  </>
  );
}

export default App;
