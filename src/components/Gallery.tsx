import biryaniImg from '@/assets/biryani.jpg';
import rollImg from '@/assets/roll.jpg';
import momoImg from '@/assets/momo.jpg';
import pokoraImg from '@/assets/pokora.jpg';

const Gallery = () => {
  const images = [
    { src: biryaniImg, alt: 'Delicious Chicken Biryani' },
    { src: rollImg, alt: 'Fresh Chicken Rolls' },
    { src: momoImg, alt: 'Steamed Momos' },
    { src: pokoraImg, alt: 'Crispy Chicken Pokora' },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="font-poppins text-lg text-muted-foreground">
            Take a visual journey through our delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-poppins text-primary-foreground text-lg font-semibold text-center px-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
