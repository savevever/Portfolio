
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* 1. Copyright & Name */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pavaris Voranithiyaovapa. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};