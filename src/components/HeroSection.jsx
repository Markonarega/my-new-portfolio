import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hey, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              Markon
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-3">
              {" "}
              Arega
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I’m Markon, a passionate full-stack developer driven by curiosity
            and the thrill of building visually stunning, high-performance web
            applications. I thrive on turning ideas into smooth, interactive
            user experiences using React, Next.js ... and modern tools. Whether
            it’s crafting pixel-perfect UIs or solving complex problems behind
            the scenes,
          </p>
          <div className="p-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Works
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
