import SectionHeading from '@/components/ui/SectionHeading';

const FACTORS = [
  'Payment security',
  'DGT Management',
  'Speed',
  'Final price',
];

const US = [
  'Cash only and guaranteed',
  "We'll take care of it.",
  'Discharge (average of 48 hours)',
  'Competitive',
];

const DEALER = [
  'Safe',
  'They do it.',
  'Media (usually several weeks)',
  'Low (commercial margins)',
];

const PRIVATE = [
  'Risk of scams',
  "It's your responsibility",
  'Leave (in some cases months)',
  'Variable (subject to change)',
];

function GreenCheck() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M11.0034 1.38281C13.526 1.4284 15.9299 2.4625 17.6977 4.26257C19.4656 6.06265 20.4561 8.48481 20.4561 11.0078C20.4561 13.5308 19.4656 15.953 17.6977 17.7531C15.9299 19.5531 13.526 20.5872 11.0034 20.6328C8.48083 20.5872 6.07696 19.5531 4.30912 17.7531C2.54128 15.953 1.55078 13.5308 1.55078 11.0078C1.55078 8.48481 2.54128 6.06265 4.30912 4.26257C6.07696 2.4625 8.48083 1.4284 11.0034 1.38281ZM9.00456 14.1344L6.64742 11.7752C6.45448 11.5816 6.34614 11.3194 6.34614 11.0461C6.34614 10.7727 6.45448 10.5105 6.64742 10.3169C6.84161 10.1247 7.10383 10.0168 7.37709 10.0168C7.65035 10.0168 7.91256 10.1247 8.10675 10.3169L9.76723 11.9795L13.9001 7.84662C14.0937 7.65368 14.3559 7.54534 14.6292 7.54534C14.9026 7.54534 15.1648 7.65368 15.3584 7.84662C15.5511 8.04037 15.6592 8.30251 15.6592 8.57577C15.5511 8.84902 15.5511 9.11116 15.3584 9.30491L10.4953 14.168C10.3966 14.2662 10.2791 14.3434 10.1498 14.3951C10.0204 14.4468 9.88202 14.4718 9.74281 14.4687C9.60359 14.4655 9.46643 14.4343 9.33958 14.3769C9.21272 14.3195 9.09877 14.237 9.00456 14.1344Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#00BA00"
      />
    </svg>
  );
}

function renderCellText(text: string, isLight = false) {
  const match = text.match(/^(.*?)\s*(\(.*?\))$/);
  if (match) {
    return (
      <span className="leading-snug">
        {match[1]} <span className={`text-[11px] sm:text-xs font-normal ${isLight ? 'text-white' : 'text-[#092B55]'}`}>{match[2]}</span>
      </span>
    );
  }
  return <span>{text}</span>;
}

/** Comparison: We buy your truck vs concessionaire vs individuals. */
export default function ComparisonTable() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          badge="Why sell directly to us?"
          title="Why Is Selling Your Truck with Us the Smartest Choice?"
        />

        <div className="mt-8 -mx-4 overflow-x-auto px-4 py-12 sm:-mx-6 sm:px-6 sm:py-14 lg:mx-0 lg:px-0 lg:py-14">
          <div className="relative mx-auto w-[960px] min-w-[960px] rounded-[18px] border border-[#E7E7E8] bg-white p-5 lg:w-full lg:min-w-0 lg:p-5">
            <div className="grid grid-cols-[1.05fr_1.35fr_1.2fr_1.2fr] items-start gap-4 2xl:gap-[30px]">
              
              {/* Column 1: Factors */}
              <div className="flex flex-col overflow-hidden rounded-[14px] border border-[#092B55] bg-white">
                <div className="flex py-4 xl:py-5 items-center rounded-[14px] justify-center bg-[#092B55] text-base font-semibold text-white xl:text-lg">
                  Factors
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {FACTORS.map((f) => (
                    <div
                      key={f}
                      className="flex py-5 xl:py-[24px] items-center px-2 xl:px-4 text-sm font-medium text-[#092B55] sxlm:text-base"
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: We Buy Your Truck (Overlapping Top & Bottom) */}
              <div className="-mt-9 -mb-9 z-10 flex flex-col rounded-[16px] bg-[#092B55] p-2.5 pb-6 border border-[#092B55]">
                <div className="flex py-5 xl:py-[22px] items-center justify-center rounded-[12px] bg-[#F17612] text-lg font-semibold text-white xl:text-xl">
                  We Buy Your Truck
                </div>
                <div className="divide-y divide-white/20">
                  {US.map((text) => (
                    <div
                      key={text}
                      className="flex py-6 xl:py-[28px] last:pb-0 xl:last:pb-[35px] items-center gap-2.5 px-1 xl:px-3.5 text-sm font-medium text-white xl:text-base"
                    >
                      <GreenCheck />
                      {renderCellText(text, true)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Concessionaire */}
              <div className="flex flex-col">
                <div className="flex py-4 xl:py-5 items-center justify-center rounded-[14px] bg-[#F3F3F3] text-base font-semibold text-[#0A0F16] xl:text-lg">
                  Concessionaire
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {DEALER.map((text) => (
                    <div
                      key={text}
                      className="flex py-5 xl:py-[24px] last:pb-0 items-center gap-2.5 px-1 xl:px-3 text-sm font-medium text-[#092B55] xl:text-base"
                    >
                      <GreenCheck />
                      {renderCellText(text)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Individuals */}
              <div className="flex flex-col">
                <div className="flex py-4 xl:py-5 items-center justify-center rounded-[14px] bg-[#F3F3F3] text-base font-semibold text-[#0A0F16] xl:text-lg">
                  Individuals
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {PRIVATE.map((text) => (
                    <div
                      key={text}
                      className="flex py-5 xl:py-[24px] last:pb-0 items-center gap-2.5 px-1 xl:px-3 text-sm font-medium text-[#092B55] xl:text-base"
                    >
                      <GreenCheck />
                      {renderCellText(text)}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
