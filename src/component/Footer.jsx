
export const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-card relative border-t border-border mt-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* 1. Copyright & Name */}
        <div className="text-left">
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