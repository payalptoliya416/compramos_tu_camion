import SectionHeading from '@/components/ui/SectionHeading';

const ROWS = [
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

const CONCESSIONAIRE = [
  'Safe',
  'They do it.',
  'Media (usually several weeks)',
  'LOW (commercial margins)',
];

const INDIVIDUALS = [
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#00BA00"
      />
    </svg>
  );
}

/** Comparison: We buy your truck vs concessionaire vs individuals. Scrolls sideways on small screens. */
export default function ComparisonTable() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          badge="Why sell directly to us?"
          title="Why Is Selling Your Truck with Us the Smartest Choice?"
        />
        <div className="mt-14 overflow-x-auto py-6">
          <div className="relative mx-auto min-w-[840px] max-w-[1140px] rounded-[24px] border border-[#E7E7E8] bg-white p-6 lg:p-8">
            <div className="grid grid-cols-[1.1fr_1.35fr_1.25fr_1.25fr] items-start gap-4 lg:gap-6">
              {/* Factors */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-[#092B55] bg-white shadow-sm">
                <div className="flex h-[48px] items-center justify-center bg-[#092B55] text-sm font-bold text-white md:text-base">
                  Factors
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {ROWS.map((r) => (
                    <div
                      key={r}
                      className="flex h-[60px] items-center px-4 text-sm font-medium text-[#092B55]"
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              {/* We Buy Your Truck */}
              <div className="-mt-4 -mb-4 z-10 flex flex-col overflow-hidden rounded-2xl bg-[#092B55] pb-3 shadow-2xl">
                <div className="flex h-[64px] items-center justify-center bg-[#F17612] text-sm font-bold text-white md:text-base">
                  We Buy Your Truck
                </div>
                <div className="divide-y divide-white/10">
                  {US.map((text) => (
                    <div
                      key={text}
                      className="flex h-[60px] items-center gap-2.5 px-4 text-xs font-medium text-white sm:text-sm"
                    >
                      <GreenCheck />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concessionaire */}
              <div className="flex flex-col">
                <div className="flex h-[48px] items-center justify-center rounded-xl bg-[#F3F3F3] text-sm font-semibold text-[#092B55] md:text-base">
                  Concessionaire
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {CONCESSIONAIRE.map((text) => (
                    <div
                      key={text}
                      className="flex h-[60px] items-center gap-2.5 px-3 text-xs font-medium text-[#3B3F45] sm:text-sm"
                    >
                      <GreenCheck />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individuals */}
              <div className="flex flex-col">
                <div className="flex h-[48px] items-center justify-center rounded-xl bg-[#F3F3F3] text-sm font-semibold text-[#092B55] md:text-base">
                  Individuals
                </div>
                <div className="divide-y divide-[#E7E7E8]">
                  {INDIVIDUALS.map((text) => (
                    <div
                      key={text}
                      className="flex h-[60px] items-center gap-2.5 px-3 text-xs font-medium text-[#3B3F45] sm:text-sm"
                    >
                      <GreenCheck />
                      <span>{text}</span>
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
