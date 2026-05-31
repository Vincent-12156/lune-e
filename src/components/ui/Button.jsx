import { Link } from "react-router-dom";

export default function Button({ children, variant = "primary", href }) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white",
    secondary:
      "border border-white/10 hover:border-blue-400 text-white bg-white/5",
  };

  const styles = `
    inline-flex items-center justify-center
    px-8 py-4 rounded-2xl
    transition-all duration-300
    hover:scale-[1.02]
    font-medium
    backdrop-blur-md
    cursor-pointer
    ${variants[variant]}
  `;

  if (href) {
    return (
      <Link to={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
