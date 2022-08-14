import { LazyLoadImage } from "react-lazy-load-image-component";
import arrowImage from "../../images/icon-arrow-down.svg";
function Header() {
  return (
  <header className="bg-mobile-header bg-cover bg-center p-[5%] text-white text-center
  sm:bg-desktop-header sm:p-[2.5%]">

    {/* Navigation */}
    <nav className="flex justify-between mb-[20%] relative sm:mb-10">

      {/* Logo/Home */}
      <a href="./" className="font-barlow font-semibold text-white text-xl">
        sunnyside
      </a>

      {/* Nav Menu */}
      {/* Nav button */}
      <input type="checkbox" className="appearance-none bg-mobile-menu 
      bg-no-repeat bg-bottom self-center 
      cursor-pointer bg-cover w-5 h-4 peer
      sm:hidden" />

      {/* Link list */}
      <ul className="absolute top-20 z-10 py-8 bg-white text-grayblue3 w-full

      after:border-[0_0_20px_20px]
      after:border-[transparent_transparent_white_transparent]
      after:absolute after:-top-[20px] after:right-0

      hidden peer-checked:block
      sm:static sm:bg-[transparent] sm:after:hidden
      sm:flex sm:py-0 sm:justify-between
      sm:w-1/3 sm:min-w-[400px]">

        <li>
          <a className="block mb-4 active:text-darkblue 
          sm:py-2 sm:text-white" href="./">About</a>
        </li>

        <li>
          <a className="block mb-4 active:text-darkblue 
          sm:py-2 sm:text-white" href="./">Services</a>
        </li>

        <li>
          <a className="block mb-4 active:text-darkblue 
          sm:py-2 sm:text-white" href="./">Projects</a>
        </li>
        
        <li>
          <a href="./" className="uppercase font-fraunces
           bg-yellow rounded-full text-darkblue py-2 px-6 inline-block
           sm:bg-white sm:hover:bg-opacity-40 sm:hover:text-white">Contact</a>
        </li>
      </ul>
    </nav>

    {/* Header Content */}
    <h1 className="uppercase text-3xl font-fraunces font-black tracking-[0.25rem] mb-[10%]">We are creatives</h1>
    <a className="mb-[40%] block sm:mb-[25%]" href="#goals">
      <span className="sr-only">scroll to goals section</span>
      <LazyLoadImage src={arrowImage} alt="scroll down arrow" className="mx-auto" />
    </a>
  </header>);
}
export default Header;