import { LazyLoadImage } from "react-lazy-load-image-component";
function Goal(props: {bg: string,h: string, p: string, reverseGrid?: boolean, twRow?: string}) {
  return (
    
    <div className="contents">
      
      {/* Background */}
      <div className={`${props.reverseGrid ? "md:col-[2/3]": ""}
      ${props.twRow ? props.twRow : ""}`}>

        <LazyLoadImage src={props.bg} className="h-full" />
        
      </div>
      
      {/* Content */}
      <div className={`p-8
      text-center ${props.reverseGrid ? "md:col-[1/2]": ""}
      ${props.twRow ? props.twRow : ""}`}>
        
        {/* Heading */}
        <h2 className="font-fraunces font-bold
        text-center text-3xl mb-8">{props.h}</h2>
        
        {/* Paragraph */}
        <p className="mb-8 font-barlow text-grayblue2">{props.p}</p>
        
        {/* Learn More Link */}
        <a href="#goals" className="uppercase
        font-fraunces font-black tracking-wider
        underline decoration-yellow decoration-4">Learn more</a>
      </div>
      
    </div>
  );
}
export default Goal;