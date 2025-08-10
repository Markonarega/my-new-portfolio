import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              JackedNerd Who Loves web Developing{" "}
            </h3>
            <p className="text-muted-foreground ">
              With over 2years of Self learning and backed up with university
              lectures in web development ,I specialized in Creating best
              Performance Web applications Using Modern technologies{" "}
            </p>
            <p className="text-muted-foreground ">
              I'am Passionate About creating elegant Solution To Complex
              Problems,And I'm Constantly Learning New Technologies And
              Techniques to Stay at the forefront of the ever-evolving web
              Landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Find Me
              </a>
              <a
                href=""
                className="py-2 px-6 rounded-full border boarder-primary text-primary hover:bg-primary/10  tracking-color duration-300"
              >
                Download Cv
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6  ">
            <div className="gradient-border  p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 width-6" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Wake-Eat-Code-Sleep-Repeat
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border  p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 width-6" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Ui/Ux Design</h4>
                  <p className="text-muted-foreground">
                    I code from concept to completion "
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border  p-6 card-hover">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 width-6" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Project Management </h4>
                  <p className="text-muted-foreground">
                    I plan, organize, and execute projects
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

export default AboutSection;
