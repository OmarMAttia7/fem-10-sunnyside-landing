type Props = {
  title: string,
  description: string,
  twBg: string,
  twColor: string
}

function Service(props: Props) {
  return (

    <div className={`${props.twBg} ${props.twColor}
    text-center bg-center bg-cover pt-[60vh] pb-12 px-4`}>

      {/* Heading */}
      <h3 className="font-fraunces font-black text-2xl mb-4">
        {props.title}
      </h3>

      {/* Description */}
      <p>{props.description}</p> 

    </div>

  );
}

export default Service;