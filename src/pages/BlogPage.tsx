import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { CATEGORY_LIST, POSTS } from '@/data/posts';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import FinalCta from '@/components/sections/FinalCta';
import Img from '@/components/ui/Img';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

const RECENT_ARTICLES = [
  {
    title: 'Low Emission Zones in Seville and Trucks: Restrictions and Sales Guide',
    image: '/images/recent01.png',
  },
  {
    title: 'New Low Emission Zone in Valencia: Best Time to Sell Your Truck?',
    image: '/images/recent02.png',
  },
  {
    title: 'How to Sell a Boom Crane or Truck Crane Quickly',
    image: '/images/blog03.png',
  },
  {
    title: 'Can You Deduct VAT When Buying a Used Truck?',
    image: '/images/blog05.png',
  },
  {
    title: 'Selling a Truck with a Lien in Spain: Legal Guide',
    image: '/images/blog06.png',
  },
];

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All Articles');

  const filtered = useMemo(
    () =>
      POSTS.filter(
        (p) =>
          (category === 'All Articles' || p.category === category) &&
          p.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query, category],
  );

  return (
    <>
      <Hero
        badge="Knowledge & insights"
        title="Truck Buying Guides, Tips & Industry Insights"
        text="Explore expert advice on selling used trucks, vehicle valuations, Spanish regulations, documentation and commercial transport."
        image="/images/blogpage-banner.png"
        primary={{ label: 'Sell Your Truck' }}
        secondary={{ label: 'Explore Our Story', to: '/about-us' }}
        checks={['Expert Truck Guides', 'Selling Tips', 'Industry Insights']}
      />

      <section className="section-y !pb-0 overflow-hidden">
        <div className="container-x grid gap-5 lg:grid-cols-[1fr_300px] 2xl:gap-[36px] 2xl:grid-cols-[1fr_380px]">
          <div className='order-2 lg:order-1 min-w-0'>
            <Badge>Latest articles</Badge>
            <h2 className="mb-6 mt-3 text-2xl font-medium leading-tight text-brand-navy sm:text-[34px] xl:text-[40px] sm:leading-[40px]">Explore Our Latest Guides</h2>

            {filtered.length === 0 ? (
              <p className="rounded-xl bg-slate-50 p-6 text-sm text-slate-500">No articles match your search.</p>
            ) : (
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <li key={p.title} className="flex flex-col overflow-hidden rounded-xl border border-[#E7E7E8] bg-white">
                    <Img src={p.image} alt={p.title} className="aspect-[326/183]" />
                    <div className="flex flex-1 flex-col p-3 2xl:p-5">
                      <span
                        className={`w-fit rounded px-3 py-2 text-xs ${
                          p.category === 'Tips & Guides'
                            ? 'bg-[#F176121A] text-[#F17612] font-semibold'
                            : 'bg-[#F3F3F3] text-[#3B3F45]'
                        }`}
                      >
                        {p.category}
                      </span>
                      <h3 className="mt-[10px] text-base font-semibold text-[#092B55] w-full lg:max-w-[280px]">{p.title}</h3>
                      <p className="mt-[15px] line-clamp-4 flex-1 text-sm leading-relaxed text-[#3B3F45]">{p.excerpt}</p>
                      <a href="#" className="mt-[30px] inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange hover:underline leading-[14px]">
                        Read Article <img src="/images/right-errow-orange.svg" alt="" className="h-[9px] w-[11px] shrink-0" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5 order-1 lg:order-2 min-w-0">
            <div className="rounded-xl border border-[#E7E7E8] p-4 2xl:p-[25px]">
              <h3 className="mb-4 text-base font-semibold text-[#092B55]">Search</h3>
              <div className="flex overflow-hidden rounded-[80px] border border-[#E7E7E8]">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="min-w-0 flex-1 px-4 py-2 text-sm focus:outline-none"
                />
                <span className="flex w-10 items-center justify-center bg-brand-orange text-white"><Search className="h-4 w-4" /></span>
              </div>
            </div>

            <div className="rounded-xl border border-[#E7E7E8]  bg-white p-4 2xl:p-[25px]">
              <h3 className="mb-4 text-base font-semibold text-[#092B55]">Recent Articles</h3>
              <ul className="flex flex-col gap-3">
                {RECENT_ARTICLES.map((p) => (
                  <li key={p.title} className="flex items-center gap-3 min-w-0">
                    <Img src={p.image} alt="" className="h-[48px] w-[64px] shrink-0 rounded object-cover" />
                    <span className="line-clamp-3 text-sm text-[#6C6F73] min-w-0 flex-1">{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#E7E7E8]  bg-white p-4 2xl:p-[25px]">
              <h3 className="mb-4 text-base font-semibold text-[#092B55]">Categories</h3>
              <ul className="flex flex-col gap-1 text-sm">
                {[{ name: 'All Articles', count: POSTS.length }, ...CATEGORY_LIST].map((c) => (
                  <li key={c.name}>
                    <button
                      type="button"
                      onClick={() => setCategory(c.name)}
                      className={`flex w-full items-center justify-between rounded-full px-[15px] text-left transition-colors cursor-pointer ${
                        category === c.name ? 'bg-brand-orange text-white py-[10px]' : 'py-[5px] text-[#092B55] hover:bg-slate-50'
                      }`}
                    >
                      {c.name}
                      <span>({c.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#092B55] p-4 2xl:p-[25px] text-white">
              <h3 className="text-base lg:text-lg font-semibold">Planning to Sell Your Truck?</h3>
              <p className="mb-5 mt-[10px] text-sm text-[#9CAABB]">Get started with a professional valuation from our team. Fast, free, and with no obligations.</p>
              <CtaButton cta={{ label: 'Appraise Your Truck' }} className="w-full" />
            </div>
          </aside>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </>
  );
}
