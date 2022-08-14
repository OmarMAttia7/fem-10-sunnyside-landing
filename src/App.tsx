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
  {/*

  
  

  Client testimonials

  
  Emily R.
  Marketing Director

  
  Thomas S.
  Chief Operating Officer

  
  Jennie F.
  Business Owner

  About
  Services
  Projects
  Contact

  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
  </>
  );
}

export default App;
