import { Link } from "react-router-dom";
import { SITE } from "@/data/site";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Steps from "@/components/sections/Steps";
import ValuationForm from "@/components/sections/ValuationForm";
import RecentPurchases from "@/components/sections/RecentPurchases";
import Testimonials from "@/components/sections/Testimonials";
import TruckCategories from "@/components/sections/TruckCategories";
import BrandLogos from "@/components/sections/BrandLogos";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Img from "@/components/ui/Img";
import SectionHeading, { Badge } from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import type { FaqItem } from "@/types";

const MINI_CARDS = [
  {
    title: "Looking to change your truck?",
    text: "Explore your options and make selling your current truck straightforward and hassle-free.",
    image: "/images/out-story01.png",
  },
  {
    title: "Is Your Truck Under an Embargo?",
    text: "We help you understand your truck’s embargo and explore the available options for selling.",
    image: "/images/out-story02.png",
  },
  {
    title: "Retiring or Leaving the Transport Business?",
    text: "We make selling your truck simpler when retiring or leaving the transport business.",
    image: "/images/out-story03.png",
  },
];

const HELP_CARDS = [
  {
    title: "Looking to reduce your fleet?",
    text: "Whether you’re adjusting your business or have more trucks than you need, we help you sell one or several vehicles through a straightforward valuation and coordinated collection.",
    image: "/images/help01.png",
  },
  {
    title: "Want to sell a truck with a mechanical fault?",
    text: "Before committing to costly repairs, find out what your truck could be worth in its current condition. Tell us about the fault and we’ll assess your options.",
    image: "/images/help02.png",
  },
  {
    title: "Inherited a truck and looking to sell it?",
    text: "We understand this can be a difficult time. We help you understand the paperwork and value the truck, so you can take the next step with confidence.",
    image: "/images/help03.png",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "What factors increase or decrease the price of a used truck in the appraisal?",
    a: "The price of a used truck is primarily determined by the make and model (premium and reliable brands, such as Scania or Volvo, tend to hold their value better); the actual mileage relative to its age ; and its overall condition . Rigorous and documented maintenance, along with good mechanical and aesthetic condition, will significantly increase the final valuation.",
  },
  {
    q: "Is the online valuation the final offer or subject to review after seeing the truck?",
    a: "The initial valuation you receive online is a provisional offer based on the information you provided . While it is our official offer, it is always subject to review and confirmation in person. Upon inspecting the truck, if we detect any undisclosed mechanical issues (such as gearbox problems, engine oil leaks, or a worn clutch), the final price we pay for your truck will be adjusted downwards to reflect the cost of these repairs.",
  },
  {
    q: "If the truck is insured, what happens to the truck insurance after the sale?",
    a: "Once the purchase is finalized, truck insurance is no longer required, as our company has fleet insurance that covers the vehicle from the time of acquisition and throughout its transport. The current owner must cancel their insurance policy with their company. We will provide the transfer and purchase documentation within 24 hours.",
  },
  {
    q: "What is the maximum acceptable mileage and year of manufacture for selling a used truck?",
    a: "We buy your truck without strict mileage or year of manufacture limits. Thanks to our business of buying and selling commercial vehicles, we buy your truck regardless of mileage, as the overall condition and operational capability of the vehicle are more important than the number of kilometers driven.",
  },
  {
    q: "When is payment made: upon signing, upon delivery of the truck, or after collection?",
    a: "Full payment of the agreed amount is made immediately after the vehicle is collected . Once our team has inspected the truck and confirmed its condition and documentation, the bank transfer or other agreed payment method is processed.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        isHome
        badge="Professional truck buyers in Spain"
        title={
          <>
            Sell Your Truck Quickly, <br />
            <span className="text-brand-orange">
              Easily and With Confidence
            </span>
          </>
        }
        text="Looking to sell your commercial truck? Get a professional valuation, straightforward support and a simple selling process from start to finish."
        image="/images/home-hero-banner.png"
        primary={{ label: "Get a Free Valuation", to: "#valuation" }}
        secondary={{ label: "Call Us Today", href: SITE.phoneHref }}
        checks={[
          "Professional Valuation",
          "Clear Process",
          "Collection Across Spain",
        ]}
      />

      {/* Experience */}
      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_1.6fr] xl:gap-[30px]">
          <div className="flex flex-col items-start gap-[15px]">
            <Badge>Our story</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[34px] xl:text-[38px]">
              Over 20 Years of Experience in the Automotive Sector
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              With over 20 years of experience in the automotive sector, we
              specialise in professional truck valuations. Our experience
              ensures a fast, reliable service.
            </p>
            <CtaButton cta={{ label: "About Us", to: "/about-us" }} />
          </div>
          <ul className="grid gap-4 2xl:gap-[24px] sm:grid-cols-3">
            {MINI_CARDS.map((c) => (
              <li
                key={c.title}
                className="overflow-hidden rounded-[12px] border border-[#E7E7E8] bg-white p-[10px]"
              >
                <Img src={c.image} alt={c.title} className="rounded-[12px]" />
                <div className="py-5 px-[5px]">
                  <h3 className="text-base font-semibold text-brand-navy-dark">
                    {c.title}
                  </h3>
                  <p className="mt-[10px] text-sm leading-relaxed text-[#6C6F73]">
                    {c.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureGrid
        badge="Why choose us"
        title="A Straightforward Way to Sell Your Truck"
        subtitle="Selling a commercial vehicle involves more than agreeing on a price. We provide professional support to help make every step clear and manageable."
        cols={4}
        variant="plain"
        staggered
        items={[
          {
            icon: "/images/right-sign.svg",
            title: "Professional Truck Valuation",
            text: "We assess your truck’s condition, specifications and relevant details to provide a professional valuation based on the vehicle.",
          },
          {
            icon: "/images/user.svg",
            title: "Clear and Transparent Terms",
            text: "Understand the offer, selling conditions and next steps with clear communication throughout the process.",
          },
          {
            icon: "/images/doc.svg",
            title: "Paperwork and Documentation",
            text: "We guide you through the required paperwork and administrative procedures involved in the vehicle transfer.",
          },
          {
            icon: "/images/diliver.svg",
            title: "Collection Arrangements",
            text: "We coordinate the collection process with you, helping make the final stage of selling your truck straightforward.",
          },
        ]}
        className="!pt-0"
      />

      <Steps
        badge="How it works"
        title="Sell Your Truck in Three Simple Steps"
        subtitle="Our process is designed to make selling your commercial vehicle clear and straightforward, from the first details to the final collection."
        action={{ label: "Get a Free Valuation" }}
        className="!pt-0"
        steps={[
          {
            icon: "/images/edit.svg",
            title: "Share Your Truck Details",
            text: "Tell us your truck’s condition, make, model, registration year, mileage and current condition using our valuation form.",
          },
          {
            icon: "/images/receive.svg",
            title: "Receive Your Valuation",
            text: "Our team reviews your vehicle details and specifications before discussing a valuation and the available next steps.",
          },
          {
            icon: "/images/complete.svg",
            title: "Complete the Sale",
            text: "Once you accept the offer, we coordinate the required paperwork, payment and vehicle collection arrangements.",
          },
        ]}
      />

      <ValuationForm
        title="Receive A Professional Valuation For Your Truck"
        badge="Get your truck valued"
      />

      <RecentPurchases
        badge="Recent purchases"
        title="Recently Purchased Trucks Across Spain"
        subtitle="Explore a selection of commercial vehicles we’ve recently purchased from sellers across Spain, covering different truck types and configurations."
      />

      <Testimonials
        badge="Customer reviews"
        subtitle="Discover what customers have to say about their experience selling a truck with our team."
        className="!pt-0"
      />

      <TruckCategories
        band
        badge="Vehicle categories"
        subtitle="From heavy-duty vehicles to specialised commercial trucks, we purchase a wide range of vehicles across Spain. Explore the truck categories we buy."
        action={{
          label: "Explore Truck Type",
          to: "/truck-types/refrigerated-trucks",
        }}
      />

      <BrandLogos subtitle="We consider commercial trucks from a wide range of manufacturers. Contact our team to discuss your vehicle." />

      {/* How can we help */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between flex-wrap">
            <SectionHeading
              badge="Your situation, our promise"
              title="How can we help?"
              align="left"
            />
            <CtaButton
              cta={{
                label: "I Want to Sell My Truck",
                to: "/get-a-free-valuation#valuation",
              }}
            />
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {HELP_CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col overflow-hidden rounded-[12px] border border-[#E7E7E8] bg-white"
              >
                <Img src={c.image} alt={c.title} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col gap-[10px] p-5 md:p-[25px]">
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A0F16]">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6C6F73]">
                    {c.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Collection across Spain */}
      <section className="mx-2 sm:mx-3">
        <div className="relative overflow-hidden rounded-3xl bg-[#071324] min-h-[580px] lg:min-h-[640px] flex items-center">
          {/* Background image */}
          <img
            src="/images/collection-bg.png"
            alt="Collection across Spain"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:object-center"
          />

          {/* Left subtle dark gradient overlay for optimal text contrast across all screen sizes */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/90 to-transparent sm:w-4/5 lg:w-3/5"
            aria-hidden
          />

          <div className="container-x relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="flex max-w-[630px] flex-col items-start gap-5 text-white">
              <Badge light bgImage="/images/label-bg.png">Nationwide collection</Badge>
              <h2 className="text-2xl font-medium leading-tight text-white sm:text-[34px] xl:text-[38px] sm:leading-[58px]">
                We Collect Commercial Trucks Across Spain
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#E7E7E8]">
                Selling your truck shouldn’t depend on where it’s located. We
                help coordinate vehicle collection across Spain, making the
                process easier from valuation to collection.
              </p>
              <ul className="mt-2 flex flex-col items-start gap-3">
                {[
                  "Collection coordination across Spain",
                  "Support with collection arrangements",
                  "Clear communication about the next steps",
                  "Assistance throughout the selling process",
                ].map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10
                      bg-[linear-gradient(90deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_100%)]
                     px-4 sm:px-5 py-2.5 text-sm sm:text-base font-normal text-white backdrop-blur-[2px]"
                  >
                    <img
                      src="/images/fill-checkmark.svg"
                      alt=""
                      className="h-4 w-4 shrink-0"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-sm sm:text-base text-[#E7E7E8]">
                And many more locations across all Spanish provinces.
              </p>
              <Link
                to="/collection-across-spain"
                className="btn-primary mt-2 self-start px-4 lg:!px-[30px] !py-3.5 text-sm sm:text-base leading-[16px] font-medium"
              >
                Explore Our Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
