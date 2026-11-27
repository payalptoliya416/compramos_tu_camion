import type { ReactNode } from 'react';
import type { CtaLink } from '@/types';
import Img from '@/components/ui/Img';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import { CheckPill } from '@/components/ui/CheckItem';

interface Props {
  badge: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  pills?: string[];
  cta?: CtaLink;
  /** Image on the right on desktop. */
  reverse?: boolean;
  /** Extra content (e.g. stats) under the text. */
  children?: ReactNode;
  imageClassName?: string;
  className?: string;
  gapClassName?: string;
}

/** Image + text block. Used across almost every page. */
export default function SplitSection({
  badge, title, paragraphs, image, imageAlt = '', pills, cta, reverse, children, imageClassName, className = '',
  gapClassName = 'lg:gap-[53px]',
}: Props) {
  return (
    <section className={`section-y ${className}`.trim()}>
      <div className={`container-x grid items-center gap-8 lg:grid-cols-2 ${gapClassName}`}>
        <Img
          src={image}
          alt={imageAlt}
          className={`rounded-2xl ${reverse ? 'lg:order-2' : ''} ${imageClassName || ''}`}
          imgClassName="!h-auto"
        />
        <div className="flex flex-col items-start gap-4">
          <Badge>{badge}</Badge>
          <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[34px] xl:text-[38px] xl:leading-[56px]">{title}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-[#3B3F45]">{p}</p>
          ))}
          {pills && (
            <div className="flex flex-wrap items-start gap-[15px] mb-2">
              {pills.map((p) => <CheckPill key={p}>{p}</CheckPill>)}
            </div>
          )}
          {children}
          {cta && <CtaButton cta={cta} className="mt-1" />}
        </div>
      </div>
    </section>
  );
}
