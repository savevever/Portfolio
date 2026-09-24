import { Moon, Sun } from "lucide-react"; 
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // ตั้งค่าเริ่มต้นเป็น true (Dark Mode)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        
        // ถ้าไม่มีใน localStorage หรือค่าเป็น "dark" ให้เปิด Dark Mode (Default)
        if (storedTheme === "dark" || !storedTheme) {          
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false); 
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true); 
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            type="button"
            aria-label="Toggle theme"
            className={cn(
                "p-2 rounded-full transition-colors duration-300 hover:bg-accent",
                "focus:outline-none"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700" />
            )}
        </button>
    );
};