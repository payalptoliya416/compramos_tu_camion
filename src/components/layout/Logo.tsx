import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

/** Text/icon logo. Replace with <img src={IMG.logo}> once the logo file is exported. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="Compramos Tu Camión">
      <Truck className="h-8 w-8 text-brand-orange" strokeWidth={2} />
      <span className="flex flex-col font-heading text-sm font-extrabold uppercase leading-none tracking-tight">
        <span className="text-brand-navy [.on-dark_&]:text-white">Compramos</span>
        <span className="text-brand-orange">Tu Camión</span>
      </span>
    </Link>
  );
}
