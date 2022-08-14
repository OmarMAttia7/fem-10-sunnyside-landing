import Goal from "./Goal";
import mobileTransformImage from "../../images/mobile/image-transform.jpg";
import desktopTransformImage from "../../images/desktop/image-transform.jpg";
import mobileStandOutImage from "../../images/mobile/image-stand-out.jpg";
import desktopStandOutImage from "../../images/desktop/image-stand-out.jpg";
function Goals() {
  return (
    <section id="goals" className="grid grid-cols-1 md:grid-cols-2">

      <Goal
      bg={[mobileTransformImage, desktopTransformImage]}
      h="Transform your brand"
      p="We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you."
      lineColor="before:bg-yellow" />
      
      <Goal
      bg={[mobileStandOutImage, desktopStandOutImage]}
      h="Stand out to the right audience"
      p="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      reverseGrid={true}
      twRow="md:row-start-2"
      lineColor="before:bg-red"/>
    
    </section>
  );
}
export default Goals;