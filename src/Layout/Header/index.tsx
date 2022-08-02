import { LazyLoadImage } from "react-lazy-load-image-component";
import hamburgerImage from "../../images/icon-hamburger.svg";
import arrowImage from "../../images/icon-arrow-down.svg";
function Header() {
  return (
  <header className="bg-mobile-header bg-cover bg-center p-[5%] text-white text-center">

    {/* Navigation */}
    <nav className="flex justify-between mb-[20%]">

      {/* Logo/Home */}
      <a href="./" className="font-barlow font-semibold text-white text-xl">
        sunnyside
      </a>

      {/* Nav Menu */}
      <button className="appearance-none">
        <LazyLoadImage src={hamburgerImage} />
      </button>
      
    </nav>

    {/* Header Content */}
    <h1 className="uppercase text-3xl font-fraunces font-black tracking-[0.25rem] mb-[10%]">We are creatives</h1>
    <a className="mb-[30%] block" href="#goals">
      <LazyLoadImage src={arrowImage} className="mx-auto" />
    </a>
  </header>);
}
export default Header;