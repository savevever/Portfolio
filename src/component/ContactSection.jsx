import { Mail, MapPin, Phone, Github, MessageCircle } from "lucide-react";

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
            <h3 className="text-2xl font-semibold mb-6 text-left">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=savevever@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    savevever@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
                  <p className="text-base text-foreground font-medium">
                    +66 085-170-3039
                  </p>
                </div>
              </div>

              {/* Line ID */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium text-sm text-muted-foreground">Line ID</h4>
                  <a
                    href="https://line.me/ti/p/~savevever"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    savevever
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium text-sm text-muted-foreground">GitHub</h4>
                  <a
                    href="https://github.com/savevever"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    github.com/savevever
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                  <p className="text-base text-foreground font-medium">
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
              Download Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};