import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { IMG } from '@/data/images';
import { CATEGORY_LIST, POSTS } from '@/data/posts';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import FinalCta from '@/components/sections/FinalCta';
import Img from '@/components/ui/Img';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

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
        image={IMG.heroBlog}
        primary={{ label: 'Sell Your Truck' }}
        secondary={{ label: 'Explore Our Story', to: '/about-us' }}
        checks={['Expert Truck Guides', 'Selling Tips', 'Industry Insights']}
      />

      <section className="section-y">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-10 2xl:grid-cols-[1fr_360px]">
          <div>
            <Badge>Latest articles</Badge>
            <h2 className="mb-6 mt-3 text-2xl font-medium text-brand-navy sm:text-3xl">Explore Our Latest Guides</h2>

            {filtered.length === 0 ? (
              <p className="rounded-xl bg-slate-50 p-6 text-sm text-slate-500">No articles match your search.</p>
            ) : (
              <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <li key={p.title} className="flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                    <Img src={p.image} alt={p.title} className="aspect-[4/3]" />
                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <span className="w-fit rounded bg-slate-100 px-2 py-1 text-[10px] text-slate-500">{p.category}</span>
                      <h3 className="text-sm font-semibold leading-snug text-brand-navy">{p.title}</h3>
                      <p className="line-clamp-4 flex-1 text-xs leading-relaxed text-slate-500">{p.excerpt}</p>
                      <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-brand-orange hover:underline">
                        Read Article <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-brand-navy-dark">Search</h3>
              <div className="flex overflow-hidden rounded-lg border border-slate-200">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="min-w-0 flex-1 px-3 py-2 text-xs focus:outline-none"
                />
                <span className="flex w-9 items-center justify-center bg-brand-orange text-white"><Search className="h-4 w-4" /></span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-brand-navy-dark">Recent Articles</h3>
              <ul className="flex flex-col gap-3">
                {POSTS.slice(0, 5).map((p) => (
                  <li key={p.title} className="flex items-center gap-3">
                    <Img src={p.image} alt="" className="h-12 w-12 shrink-0 rounded" />
                    <span className="line-clamp-3 text-[11px] leading-snug text-slate-600">{p.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-brand-navy-dark">Categories</h3>
              <ul className="flex flex-col gap-1 text-xs">
                {[{ name: 'All Articles', count: POSTS.length }, ...CATEGORY_LIST].map((c) => (
                  <li key={c.name}>
                    <button
                      type="button"
                      onClick={() => setCategory(c.name)}
                      className={`flex w-full items-center justify-between rounded-full px-3 py-2 text-left transition-colors ${
                        category === c.name ? 'bg-brand-orange text-white' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {c.name}
                      <span>({c.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-brand-navy p-5 text-white">
              <h3 className="text-sm font-semibold">Planning to Sell Your Truck?</h3>
              <p className="mb-4 mt-1 text-xs text-white/70">Get started with a professional valuation from our team. Fast, free, and with no obligations.</p>
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
