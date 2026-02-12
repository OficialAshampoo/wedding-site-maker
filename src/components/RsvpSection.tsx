import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor, insira seu nome.");
      return;
    }
    setSubmitted(true);
    toast.success("Confirmação recebida! Obrigado!");
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-lg mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary tracking-[0.25em] uppercase text-sm mb-4 font-body"
        >
          Presença
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl font-light italic text-foreground mb-4"
        >
          Confirme sua presença
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-body text-muted-foreground mb-12"
        >
          Ficaremos muito felizes com a sua presença neste dia tão especial.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary rounded-lg p-10"
          >
            <p className="font-display text-2xl text-foreground mb-2">Obrigado, {name}!</p>
            <p className="font-body text-muted-foreground">Sua confirmação foi registrada. Nos vemos lá! 💚</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-card border-border font-body text-center h-12"
            />
            <Input
              placeholder="Número de acompanhantes"
              type="number"
              min="0"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-card border-border font-body text-center h-12"
            />
            <Button
              type="submit"
              className="w-full h-12 font-body tracking-widest uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Confirmar Presença
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
