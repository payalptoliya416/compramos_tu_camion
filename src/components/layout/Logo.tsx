import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export default function Logo({ className = '', variant = 'header' }: LogoProps) {
  const src = variant === 'footer' ? '/images/footer-logo.png' : '/images/header-logo.png';
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Compramos Tu Camión">
      <img
        src={src}
        alt="Compramos Tu Camión"
        className="w-full max-w-[140px] xs:max-w-[160px] md:max-w-[224px]"
      />
    </Link>
  );
}
