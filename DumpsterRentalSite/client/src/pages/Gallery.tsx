import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@assets/generated_images/Black_dumpster_orange_lid_driveway_6bcb136c.png";
import constructionImage from "@assets/generated_images/Black_dumpster_construction_site_12750905.png";
import sizesImage from "@assets/generated_images/Three_dumpster_sizes_comparison_1492bcd3.png";
import backyardImage from "@assets/generated_images/Residential_backyard_dumpster_9da63b80.png";
import deliveryImage from "@assets/generated_images/Dumpster_delivery_service_action_b7eadeec.png";
import commercialImage from "@assets/generated_images/Commercial_property_dumpster_09356a94.png";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: heroImage,
      alt: "Black dumpster with orange lid on residential driveway",
      category: "Residential",
    },
    {
      src: constructionImage,
      alt: "Dumpster at construction site",
      category: "Commercial",
    },
    {
      src: sizesImage,
      alt: "Multiple dumpster sizes comparison",
      category: "Sizes",
    },
    {
      src: backyardImage,
      alt: "Dumpster in residential backyard",
      category: "Residential",
    },
    {
      src: deliveryImage,
      alt: "Dumpster delivery service in action",
      category: "Service",
    },
    {
      src: commercialImage,
      alt: "Commercial property dumpster placement",
      category: "Commercial",
    },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See our dumpsters in action across residential and commercial projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover-elevate transition-all"
                onClick={() => openLightbox(image.src)}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Have questions about our dumpsters or need help selecting the right size?
            </p>
            <a href="tel:555-123-4567" data-testid="button-gallery-call">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover-elevate active-elevate-2">
                Call (555) 123-4567
              </button>
            </a>
          </div>
        </div>
      </section>

      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            data-testid="button-close-lightbox"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            data-testid="img-lightbox"
          />
        </div>
      )}
    </div>
  );
}
