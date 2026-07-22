import { Link } from "react-router-dom";
import logo from "@/assets/brand/khadria-logo.jpeg";

interface LogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

const Logo = ({ variant = "light", compact = false }: LogoProps) => {
  const textColor = variant === "light" ? "text-foreground" : "text-white";
  const subColor = variant === "light" ? "text-primary" : "text-primary";

  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Logo mark: golden phoenix crop, framed to sit beautifully on any bg */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1 ring-primary/30 bg-gradient-to-br from-[#1a1a1a] to-[#3a2b0a] shadow-md group-hover:ring-primary/60 transition-all duration-300 shrink-0">
        <img
          src={logo}
          alt="Khadria Groups emblem"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-500"
          loading="eager"
        />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className={`font-heading font-bold text-base sm:text-lg tracking-wide ${textColor}`}>
            KHADRIA
          </p>
          <p className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] ${subColor}`}>
            Groups
          </p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
