import PageHero from "../components/layout/PageHero";
import Button from "../components/ui/Button";
import lune from "../assets/Lune_seule.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <PageHero
      fullHeight={true}
      eyebrow="LUN·E | Lien d’Univers Numériques"
      title={
        <>
          Outils
          <span className="text-blue-500"> personnalisés</span>
          <br />
          pour les
          <span className="text-cyan-400"> indépendants</span>
        </>
      }
      description="Développement de sites internet, applications web et outils de gestion"
      visual={
        <motion.img
          src={lune}
          alt="lune"
          animate={{
            y: [0, -15, 0],
            rotate: [4, 2, 4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
                w-[340px] h-[340px] rounded-full object-cover
                drop-shadow-[0_0_60px_rgba(59,130,246,0.35)]
                select-none pointer-events-none
              "
        />
      }
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="#projects">Découvrir mes projets</Button>

        <Button href="/contact" variant="secondary">
          Me contacter
        </Button>
      </div>
    </PageHero>
  );
}
