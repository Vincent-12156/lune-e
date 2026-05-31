import { motion } from "framer-motion";
import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  visual,
  fullHeight = true,
}) {
  return (
    <section
      className={`
        relative
        ${fullHeight ? "min-h-[100dvh]" : "min-h-[80vh]"}
        flex items-center
        overflow-hidden
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/15
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <Container>
        <div
          className="
            relative z-10
            w-full
            grid lg:grid-cols-2
            gap-20
            items-center
            pt-[100px]
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-blue-400 mb-6">
              {eyebrow}
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
                mb-8
              "
            >
              {title}
            </h1>

            <p
              className="
                text-zinc-400
                text-lg
                leading-relaxed
                mb-10
              "
            >
              {description}
            </p>

            {children && <div className="mt-10">{children}</div>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {visual}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
