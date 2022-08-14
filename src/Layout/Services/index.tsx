import Service from "./Service";
function Services() {
  return (
    <section id="services" className="grid grid-cols-1 sm:grid-cols-2">

      <Service
      title="Graphic Design"
      description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      twColor="text-cyan-graphic"
      twBg="bg-mobile-graphic sm:bg-desktop-graphic"
      
      />
      <Service
      title="Photography"
      description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      twColor="text-blue-photography"
      twBg="bg-mobile-photography sm:bg-desktop-photography"
      />

    </section>
  );
}

export default Services;