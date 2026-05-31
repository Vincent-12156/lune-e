export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        rounded-3xl
        bg-white/[0.03]
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-500
        border border-blue-500/50
        shadow-[0_0_60px_rgba(37,99,235,0.15)]
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-blue-500/5
          to-cyan-500/5
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
