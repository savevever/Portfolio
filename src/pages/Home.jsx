import {ThemeToggle} from "../component/themetoggle"
import {StarBackground} from "../component/StarBackground"
import {Navbar} from "../component/Navbar"
import {HeroSection} from "../component/HeroSection"
import {AboutSection} from "../component/AboutSection"
import {SkillsSection} from "../component/SkillSection"
// import {ProjectSection} from "../component/ProjectSection"
import {ContactSection} from "../component/ContactSection"
import {Footer} from "../component/Footer"

export const Home = () =>{
    return( 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        {/* background effect */}
            <StarBackground />
        {/* navbar */}
            <Navbar />
        {/* main contect */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </main>
        {/* footer */}
            <Footer />
    </div>);
}