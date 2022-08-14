import Testimony from "./Testimony";

type Testimonial = {
  name: string,
  title: string,
  testimony: string
}

let testimonialsData: Testimonial[] = [
  {
    name: "Emily R.",
    title: "Marketing Director",
    testimony: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
  },
  {
    name: "Thomas S.",
    title: "Chief Operating Officer",
    testimony: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
  },
  {
    name: "Jennie F.",
    title: "Buisness Owner",
    testimony: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
  }
]

function Testimonials() {
  return (
    <section id="testimonials"
    className="pt-12 px-4 bg-white text-center">

      {/* Heading */}
      <h3 
      className="uppercase font-fraunces font-black 
      text-grayblue2 tracking-[0.25rem]
      mb-8">
        Client testimonials
      </h3>

      {/* Testimonials */}
      <div className="flex flex-row flex-wrap gap-4">
      {
        testimonialsData.map((data, index) => {
          return (
            <Testimony 
            name={data.name}
            title={data.title}
            testimony={data.testimony}
            key={index} />
          )
        })
      }
      </div>
    </section>
  );
}

export default Testimonials;