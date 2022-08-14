import { LazyLoadImage } from "react-lazy-load-image-component";
function Goal(props: {bg: string[],h: string, p: string, reverseGrid?: boolean, twRow?: string, lineColor: string}) {
  return (
    
    <div className="contents">
      
      {/* Background */}
      <div className={`${props.reverseGrid ? "md:col-[2/3]": ""}
      ${props.twRow ? props.twRow : ""}`}>

<LazyLoadImage
        src={props.bg[0]}
        srcSet={`${props.bg[0]} 750w,
                 ${props.bg[1]} 720w`}
        sizes="(max-width: 768px) 750px,
        720px"
        className="h-full" />
        
      </div>
      
      {/* Content */}
      <div className={`p-8
      text-center ${props.reverseGrid ? "md:col-[1/2]": ""}
      ${props.twRow ? props.twRow : ""} flex justify-center flex-col`}>
        
        {/* Heading */}
        <h2 className="font-fraunces font-bold
        text-center text-3xl mb-8">{props.h}</h2>
        
        {/* Paragraph */}
        <p className="mb-8 font-barlow text-grayblue2">{props.p}</p>
        
        {/* Learn More Link */}
        <a href="#goals" className={`uppercase
        font-fraunces font-black tracking-wider
        decoration-4
        ${props.lineColor} relative
        w-max before:w-32 before:h-2 before:-left-2 
        before:absolute before:bottom-0 before:-z-10
        before:opacity-50 before:rounded-full
        active:before:opacity-100`}>Learn more</a>
      </div>
      
    </div>
  );
}
export default Goal;