import { ExternalLink, Mail } from "lucide-react";

import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="
        relative
        border-t border-white/10
        py-6 mt-6 sm:mt-32
        overflow-hidden
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[200px]
          bg-blue-500/10
          blur-[120px]
        "
      />

      <Container>
        <div className="text-sm text-zinc-600 flex justify-center">
          © 2026 LUN-e · Lien d’Univers Numériques
        </div>
      </Container>
    </footer>
  );
}
