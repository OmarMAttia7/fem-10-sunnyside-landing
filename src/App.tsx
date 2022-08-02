import './App.css';
import Header from "./Layout/Header";
import Goals from "./Layout/Goals";
import Services from './Layout/Services';
function App() {
  return (<>
    <Header />
    <main className="font-barlow">
      <Goals />
      <Services />
    </main>
  {/*

  
  

  Client testimonials

  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
  Emily R.
  Marketing Director

  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
  Thomas S.
  Chief Operating Officer

  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
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
