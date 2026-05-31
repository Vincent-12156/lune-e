export default function Input(props) {
  return (
    <input
      {...props}
      className="
        w-full
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        px-5 py-4
        text-white
        placeholder:text-zinc-500
        outline-none
        transition-all
        focus:border-blue-500/50
        focus:bg-white/[0.05]
      "
    />
  );
}
