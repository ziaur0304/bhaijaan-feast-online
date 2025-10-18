import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/917002638389', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/ebyBGNbj63N2ay7W7', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/bhaijaan_cafe_?igsh=MTIzYzB6bWJ5MGNneg==', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
        </div>

        <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-soft">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Location</h3>
                <p className="font-poppins text-muted-foreground">8RGV+QGR Bhaijaan Cafe</p>
                <Button variant="link" className="p-0 h-auto text-primary" onClick={openMaps}>
                  Open in Maps
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-soft">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+917002638389"
                  className="font-poppins text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7002638389
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-soft">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:bhaijaancafetnd@gmail.com"
                  className="font-poppins text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  bhaijaancafetnd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-soft">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="font-poppins text-muted-foreground">11:00 AM – 11:30 PM</p>
                <p className="font-poppins text-sm text-muted-foreground mt-1">Open Daily</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-soft">
              <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Follow Us</h3>
                <Button variant="link" className="p-0 h-auto text-primary" onClick={openInstagram}>
                  @bhaijaan_cafe_
                </Button>
              </div>
            </div>

            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              Order via WhatsApp
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Contact;
