import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
  id="hero"
  className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 md:py-32"
>
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Pavaris
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Voranithiyaovapa
            </span>
          </h1>

          {/* แก้ไข max-2-2xl -> max-w-2xl */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Welcome to my website! A space to introduce myself and showcase my
            portfolio. I hope this portfolio gives you a better sense of who I am and how I work.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#skills"
              className="cosmic-button inline-block cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Click to View My Skills
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};