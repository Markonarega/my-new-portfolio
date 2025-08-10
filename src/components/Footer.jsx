import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between">
      <p className="text-sm text-muted-foreground ">
        @copy:{new Date().getFullYear()} Markon arega. All right reserved
      </p>
      <a href="#hero">
        <ArrowUp className="p-2 rounded-full bg-primary/10 hover:bg-primary  transition-color size-8" />
      </a>
    </footer>
  );
};

export default Footer;
