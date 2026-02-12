import { motion } from "framer-motion";
import { MapPin, Clock, Church, PartyPopper } from "lucide-react";

const events = [
  {
    icon: Church,
    title: "Cerimônia",
    time: "16:00",
    location: "Igreja Matriz de São José",
    address: "Rua das Flores, 123 - Centro",
  },
  {
    icon: PartyPopper,
    title: "Recepção",
    time: "18:00",
    location: "Espaço Villa Garden",
    address: "Estrada do Campo, 456",
  },
];

const EventSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary tracking-[0.25em] uppercase text-sm mb-4 font-body"
        >
          Celebração
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl font-light italic text-foreground mb-16"
        >
          Quando & Onde
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="bg-card rounded-lg p-10 shadow-sm"
            >
              <event.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-foreground mb-4">{event.title}</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-body text-sm">{event.time}</span>
              </div>
              <p className="font-display text-lg text-foreground mb-1">{event.location}</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-body text-sm">{event.address}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
