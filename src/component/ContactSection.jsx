import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for new opportunities to learn and build software together. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=savevever@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    savevever@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+66851703039"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +66 085-170-3039
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Nong Song Hong, Ban Phaeo, Samut Sakhon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Download CV */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col items-center justify-center">
            <div className="w-full flex justify-center items-center my-6">
              <img
                src={new URL("../assets/Pavaris_varanitiyaovapa.png", import.meta.url).href}
                alt="Pavaris Voranithi"
                className="w-[85%] h-auto max-h-[400px] object-contain"
              />
            </div>

            <a
              href="/assets/Pavaris_varanitiyaovapa.png"
              download
              className="mt-4 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-block font-medium"
            >
              Download PortFolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};