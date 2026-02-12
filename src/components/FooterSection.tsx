import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 bg-secondary text-center">
      <p className="font-display text-2xl italic text-foreground mb-2">Ana & Pedro</p>
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <span className="font-body text-sm">Feito com</span>
        <Heart className="w-3 h-3 text-primary fill-primary" />
      </div>
    </footer>
  );
};

export default FooterSection;
