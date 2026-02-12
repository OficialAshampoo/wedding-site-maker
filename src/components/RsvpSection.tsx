import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const rsvpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Por favor, insira seu nome.")
    .max(100, "O nome deve ter no máximo 100 caracteres.")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "O nome contém caracteres inválidos."),
  guests: z
    .number({ invalid_type_error: "Insira um número válido." })
    .int("O número deve ser inteiro.")
    .min(0, "O número não pode ser negativo.")
    .max(10, "Máximo de 10 acompanhantes."),
});

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; guests?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = rsvpSchema.safeParse({
      name,
      guests: guests === "" ? 0 : Number(guests),
    });

    if (!result.success) {
      const fieldErrors: { name?: string; guests?: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field as "name" | "guests"] = err.message;
      });
      setErrors(fieldErrors);
      const firstError = result.error.errors[0]?.message;
      if (firstError) toast.error(firstError);
      return;
    }

    setSubmitted(true);
    toast.success("Confirmação recebida! Obrigado!");
  };

  const sanitizedName = name.replace(/[<>&"'/]/g, "");

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
            <p className="font-display text-2xl text-foreground mb-2">Obrigado, {sanitizedName}!</p>
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
            <div>
              <Input
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="bg-card border-border font-body text-center h-12"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1 font-body">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                placeholder="Número de acompanhantes"
                type="number"
                min="0"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-card border-border font-body text-center h-12"
              />
              {errors.guests && (
                <p className="text-destructive text-sm mt-1 font-body">{errors.guests}</p>
              )}
            </div>
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
