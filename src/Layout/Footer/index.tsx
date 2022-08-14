import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import { LazyLoadImage } from "react-lazy-load-image-component"
function Footer() {
  return (
    <footer className="bg-cyan-footer text-center px-8 py-12 text-cyan-graphic font-semibold font-barlow">
      <a href="./" className="block text-3xl mb-6 font-bold">sunnyside</a>
      <div className="flex justify-center mb-12 gap-16">
        <a className="active:text-white" href="#goals">About</a>
        <a className="active:text-white" href="#services">Services</a>
        <a className="active:text-white" href="#gallery">Projects</a>
      </div>
      <div className="flex justify-center">
        <a className="ml-4 active:text-white" href="./">
          <span className="sr-only">Facebook</span>
          <LazyLoadImage src={iconFacebook} />
        </a>
        <a className="ml-4 active:text-white" href="./">
          <span className="sr-only">Instagram</span>
          <LazyLoadImage src={iconInstagram} />
        </a>
        <a className="ml-4 active:text-white" href="./">
          <span className="sr-only">Twitter</span>
          <LazyLoadImage src={iconTwitter} />
        </a>
        <a className="ml-4 active:text-white" href="./">
          <span className="sr-only">Pinterest</span>
          <LazyLoadImage src={iconPinterest} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;