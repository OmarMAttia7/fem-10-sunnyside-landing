import {LazyLoadImage} from "react-lazy-load-image-component";
import galleryImages from "./images";
function Gallery() {
  let key = 0;
  return (
    <section id="gallery" className="grid grid-cols-2 sm:grid-cols-4">
      <h3 className="sr-only">Our Gallery</h3>
      {galleryImages.mobile.map((image, index) => {
        return <LazyLoadImage
        src={image}
        srcSet={`${image} 376w,
                 ${galleryImages.desktop[index]} 720w`}
        sizes="(max-width: 640px) 376px,
        720px"
        key={key++} />
      })}
    </section>
  );
}

export default Gallery;