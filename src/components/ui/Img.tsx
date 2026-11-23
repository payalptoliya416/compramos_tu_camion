import { useState } from 'react';
import { Truck } from 'lucide-react';

interface ImgProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}

/** Image with a graceful placeholder when the file is missing. */
export default function Img({ src, alt = '', className = '', imgClassName = '' }: ImgProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400">
          <Truck className="h-1/4 w-1/4 min-h-6 min-w-6 max-h-16 max-w-16" strokeWidth={1.25} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
