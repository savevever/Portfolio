import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
                    : "py-5 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* โลโก้ด้านซ้ายสุด */}
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Pavaris </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>

                {/* Mobile Nav Trigger (ตอนยังไม่เปิดเมนู) */}
                <div className="flex items-center space-x-3 md:hidden">
                    <ThemeToggle />
                    
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="p-2 text-foreground focus:outline-none"
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay ผ่าน React Portal */}
            {mounted &&
                createPortal(
                    <div
                        className={cn(
                            "fixed inset-0 z-50 min-h-screen w-screen bg-background/95 backdrop-blur-md flex flex-col items-center justify-center",
                            "transition-all duration-300 md:hidden",
                            isMenuOpen
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                        )}
                    >
                        {/* 👈 ย้ายปุ่มปิด (X) มาไว้มุมขวาบนภายใน Portal Overlay */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-5 right-4 p-2 text-foreground focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col space-y-8 text-xl text-center">
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>,
                    document.body
                )}
        </nav>
    );
};