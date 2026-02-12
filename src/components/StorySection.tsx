import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-primary tracking-[0.25em] uppercase text-sm mb-4 font-body"
        >
          Nossa História
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl font-light italic text-foreground mb-10"
        >
          Como tudo começou
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-12 h-px bg-primary mx-auto mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-muted-foreground leading-relaxed text-base md:text-lg"
        >
          Nos conhecemos em uma tarde de verão e desde então não nos separamos mais. 
          Depois de anos compartilhando sonhos, risadas e aventuras, decidimos dar o 
          próximo passo e celebrar nosso amor com as pessoas mais importantes de nossas vidas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { date: "Janeiro 2020", title: "Primeiro Encontro", desc: "Um café que se transformou em horas de conversa" },
            { date: "Dezembro 2023", title: "O Pedido", desc: "Um pôr do sol inesquecível e um sim eterno" },
            { date: "Março 2026", title: "O Grande Dia", desc: "O início da nossa vida juntos" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="text-center"
            >
              <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2 font-body">{item.date}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
