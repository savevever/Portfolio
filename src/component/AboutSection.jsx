import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      /* 
         ✅ แก้ไขตรงนี้: 
         - บนมือถือ: ใช้ pt-6 (ลดระยะห่างชดเชยพื้นที่ล่างของ Hero) และ pb-16
         - จอ md ขึ้นไป: ใช้ md:py-24 ตามเดิม
      */
      className="relative px-4 pt-6 pb-16 md:py-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I have a solid foundation in building responsive web applications using modern technologies like React, 
              Tailwind CSS, and JavaScript. I focus on creating clean, readable code and 
              intuitive user interfaces that deliver a great user experience.
            </p>

            <p className="text-muted-foreground">
              I understand how frontend applications interact with backend services and application logic,
              and I am continuously learning best practices to improve performance, usability, 
              and development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with modern frontend technologies, 
                    focusing on clean structure and maintainable code.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Developer</h4>
                  <p className="text-muted-foreground">
                    Passionate about building functional software, writing clean and readable code, 
                    and continuously learning new technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project-Based Development</h4>
                  <p className="text-muted-foreground">
                    Developing projects from idea to implementation, 
                    learning through real-world use cases and iterative improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};