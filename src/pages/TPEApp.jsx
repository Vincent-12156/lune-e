import { ChartColumn, FileText, Users, Euro } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import PageHero from "../components/layout/PageHero";

const features = [
  { id: "1", Icon: Users, title: "Fichier clients / animaux" },
  { id: "2", Icon: FileText, title: "Compte-rendus" },
  { id: "3", Icon: Euro, title: "Facturation" },
  { id: "4", Icon: ChartColumn, title: "Suivi d’activité" },
];

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl mx-auto"
    >
      <Card className="p-6">
        {/* TOP BAR */}
        <div className="flex justify-end mb-6">
          <div className="w-3 h-3 rounded-sm bg-white/10" />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="
                h-20
                rounded-2xl
                bg-blue-500/10
                border border-blue-500/10
              "
            />
          ))}
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="
                h-12
                rounded-xl
                bg-white/[0.03]
                border border-white/5
              "
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function TPEApp() {
  return (
    <PageHero
      eyebrow="GEST·AL"
      title={
        <>
          Un outil de gestion
          <span className="text-blue-500"> simple</span>
          <br />
          pour gagner du
          <span className="text-cyan-400"> temps</span>
        </>
      }
      description="Contrôles et suivis efficaces de prestations animales."
      visual={<DashboardPreview />}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {features.map(({ id, Icon, title }) => (
          <Card key={id}>
            <div className="flex items-center gap-4 p-4">
              <Icon size={24} className="text-blue-400" />
              <span className="text-zinc-300">{title}</span>
            </div>
          </Card>
        ))}
      </div>
    </PageHero>
  );
}
