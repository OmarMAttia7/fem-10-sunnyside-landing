type Props = {
  name: string,
  title: string,
  testimony: string
}

function Testimony(props: Props) {
  return (

    <div className="flex-[320px]">

      {/* Placeholder for photo */}
      <div className="w-12 h-12 mx-auto rounded-full bg-blue-photography mb-4"></div>
      
      {/* Paragraph */}
      <p className="text-sm text-grayblue3 mb-4">{props.testimony}</p>

      {/* Name */}
      <p className="font-fraunces text-base mb-2">{props.name}</p>

      {/* Title */}
      <p className="text-grayblue1 mb-12 text-xs font-semibold">{props.title}</p>
    </div>
  );
}

export default Testimony;