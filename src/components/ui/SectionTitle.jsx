export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-4xl mb-6">
      <p
        className="
          uppercase tracking-[0.3em]
          text-blue-400 text-sm
          mb-4
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          text-3xl md:text-5xl
          font-bold
          mb-6
          leading-tight
        "
      >
        {title}
      </h2>

      <p
        className="
          text-zinc-400
          text-lg
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}
