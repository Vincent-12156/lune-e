import { Monitor, Smartphone, BriefcaseBusiness } from "lucide-react";

import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const services = [
  {
    icon: Monitor,
    title: "Sites Internet",
    description:
      "Des sites modernes, rapides et optimisés pour votre visibilité.",
  },
  {
    icon: Smartphone,
    title: "Applications Web",
    description:
      "Des outils numériques personnalisés adaptés à vos besoins réels.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Solution de gestion",
    description: "Clients, animaux, facturation et suivi d’activité simplifiés.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionTitle
          eyebrow="services"
          title="Des solutions pensées pour être simples et efficaces."
          description="Chaque projet est conçu pour répondre à un besoin concret avec une expérience fluide et rapide."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className="p-10">
                <Icon size={42} className="text-blue-400 mb-8" />

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
