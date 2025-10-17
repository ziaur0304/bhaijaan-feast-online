import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Bhaijaan Cafe</h3>
            <p className="font-poppins text-sm opacity-90">
              Where Flavor Meets Family. Serving authentic Indian and Mughlai cuisine with love.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="opacity-90 hover:opacity-100 transition-opacity">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-90 hover:opacity-100 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/bhaijaan_cafe_?igsh=MTIzYzB6bWJ5MGNneg=="
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:bhaijaancafetnd@gmail.com"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+917002638389"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <p className="font-poppins text-sm opacity-90">Open Daily: 11:00 AM – 11:30 PM</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-poppins text-sm opacity-90 mb-2">
            © 2025 Bhaijaan Cafe. All rights reserved.
          </p>
          <p className="font-poppins text-sm opacity-75">
            Developed by{' '}
            <a
              href="https://www.instagram.com/aura_creative_space?igsh=bXB4MWJqODZybmVw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              Aura Creative Space
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
