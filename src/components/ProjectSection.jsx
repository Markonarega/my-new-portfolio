import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MERN Landing Page",
    description: "A beautiful landing Page app using React And Tailwind",
    image: "/projects/project.png.png", // fixed double extension
    tags: ["react", "tailwind", "Node.js"],
    demoUrl: "https://mark-theta.vercel.app/",
    githubUrl: "https://github.com/Markonarega/mark/",
  },
  {
    id: 2,
    title: "MERN Landing Page 2",
    description: "Another beautiful landing Page app using React And Tailwind",
    image: "/projects/crm.png",
    tags: ["react", "tailwind", "Node.js"],
    demoUrl: "https://crm-five-theta.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "MERN Landing Page 3",
    description: "Yet another landing Page app using React And Tailwind",
    image: "/projects/project3.png.jpg",
    tags: ["react", "tailwind", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Project</span>
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-muted-foreground">
            Here are some of my recent projects built with attention to detail,
            performance, and user interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 mt-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex justify-baseline items-center mt-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        {/* <Github size={20} /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/markonarega"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Check My Github
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
