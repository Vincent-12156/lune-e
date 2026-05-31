import { motion } from "framer-motion";
import { Sprout, Music4, BriefcaseBusiness, Globe } from "lucide-react";

import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const projects = [
  {
    icon: Sprout,
    title: "ShareUp",
    category: "Application mobile",
    description:
      "Plateforme communautaire dédiée à l’échange de biens issus du jardin.",
  },

  {
    icon: Music4,
    title: "Partisong",
    category: "Application Web",
    description:
      "Outil d’édition de partitions musicales pour un résultat homogène et personnalisable.",
  },

  {
    icon: Globe,
    title: "LUN·E",
    category: "Site internet",
    description:
      "Page personnelle présentant l'acitivité et les projets encours et réalisés.",
  },

  {
    icon: BriefcaseBusiness,
    title: "GEST·AL",
    category: "Logiciel professionnel",
    description:
      "Solution de gestion clients, animaux, comptes-rendus, factures et suivi d’activité.",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-40
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-blue-500/10
          rounded-full
          blur-[140px]
        "
      />

      <Container>
        <SectionTitle
          eyebrow="projets"
          title="Des applications conçues autour d’usages réels."
          description="Chaque projet répond à un besoin concret avec une approche simple, rapide et centrée sur l'utilisateur."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card className="p-10 h-full">
                  <div className="flex items-start justify-between mb-10">
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.3em]
                          text-blue-400
                          mb-3
                        "
                      >
                        {project.category}
                      </p>

                      <h3
                        className="
                          text-3xl
                          font-bold
                          leading-tight
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div
                      className="
                        w-16 h-16
                        rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                        flex items-center justify-center
                      "
                    >
                      <Icon size={30} className="text-blue-400" />
                    </div>
                  </div>

                  <p
                    className="
                      text-zinc-400
                      leading-relaxed
                      text-lg
                    "
                  >
                    {project.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
