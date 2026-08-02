'use client';

import Link from 'next/link';
import {
FaLaptopCode,
FaBolt,
FaShieldAlt,
FaMobileAlt,
FaSearch,
FaCheckCircle,
FaArrowRight,
FaRocket,
FaCode,
} from 'react-icons/fa';

export default function StaticWebsitesPage() {
const features = [
{
icon: FaBolt,
title: 'Lightning Fast',
description:
'Lightweight websites designed for fast loading and smooth browsing experiences.',
},
{
icon: FaShieldAlt,
title: 'Secure',
description:
'A simple architecture with fewer moving parts for a reliable website experience.',
},
{
icon: FaMobileAlt,
title: 'Fully Responsive',
description:
'Professional layouts that adapt beautifully to mobile, tablet and desktop screens.',
},
{
icon: FaSearch,
title: 'SEO Friendly',
description:
'Clean page structure and performance-focused development for better discoverability.',
},
];

const websiteTypes = [
'Business Websites',
'Portfolio Websites',
'Landing Pages',
'Agency Websites',
'Personal Websites',
'Product Showcase',
];

const process = [
['01', 'Planning', 'We understand your business, audience and website objectives.'],
['02', 'Design', 'We create a clean and professional visual structure.'],
['03', 'Development', 'We build the website with responsive and optimized code.'],
['04', 'Launch', 'We test the website across devices and prepare it for launch.'],
];

return (
<main className="min-h-screen overflow-hidden bg-white text-gray-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-primary text-white">

    <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white/5 lg:block" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid min-h-[560px] items-center gap-8 py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:py-24">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
            <FaLaptopCode />
            Static Websites
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Simple Websites.
            <span className="block text-white/70">
              Powerful First Impressions.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8">
            Fast, secure and professional static websites for portfolios,
            landing pages, business websites and digital presentations.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1 sm:text-base"
            >
              Build My Website
              <FaArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              Explore Services
            </Link>

          </div>

        </div>

        {/* CODE VISUAL */}
        <div className="relative">

          <div className="rounded-3xl border border-white/20 bg-black/10 p-3 shadow-2xl backdrop-blur-sm">

            <div className="overflow-hidden rounded-2xl bg-white">

              <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">

                <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />

                <div className="ml-2 h-6 flex-1 rounded-lg bg-gray-50" />

              </div>

              <div className="grid grid-cols-[80px_1fr]">

                <div className="space-y-3 bg-gray-50 p-4">
                  <div className="h-2 w-10 rounded bg-gray-200" />
                  <div className="h-2 w-12 rounded bg-gray-200" />
                  <div className="h-2 w-9 rounded bg-gray-200" />
                  <div className="h-2 w-11 rounded bg-gray-200" />
                </div>

                <div className="p-5 sm:p-7">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <FaCode className="text-primary" />
                    </div>

                    <div>
                      <div className="h-3 w-28 rounded bg-gray-200" />
                      <div className="mt-2 h-2 w-20 rounded bg-gray-100" />
                    </div>

                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-100" />
                    <div className="h-3 w-5/6 rounded bg-gray-100" />
                    <div className="h-3 w-3/4 rounded bg-primary/10" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-gray-50" />
                    <div className="h-20 rounded-xl bg-primary/5" />
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white p-3 shadow-xl sm:block">

            <div className="flex items-center gap-2.5">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaBolt className="text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Performance
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Fast & Lightweight
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

  {/* FEATURES */}
  <section className="py-14 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mb-8 text-center">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Why Static
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Clean. Fast. Professional.
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Perfect when you need a focused, professional online presence
          without unnecessary complexity.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:p-6"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary">
                <Icon className="text-lg text-primary group-hover:text-white" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  </section>

  {/* TYPES */}
  <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

    <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Perfect For
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Websites For
          <span className="block text-primary">
            Every Simple Need
          </span>
        </h2>

        <p className="mt-4 text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Whether you are launching a personal portfolio or presenting
          your business online, we create focused experiences that look
          professional on every screen.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">

        {websiteTypes.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-primary/20 hover:shadow-md"
          >
            <FaCheckCircle className="text-primary" />

            <p className="mt-3 text-sm font-semibold text-gray-800">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>
  </section>

  {/* PROCESS */}
  <section className="py-14 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mb-8 text-center">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Simple Process
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          From Concept To Launch
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {process.map(([number, title, description]) => (
          <div
            key={number}
            className="rounded-2xl border border-gray-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
          >

            <span className="text-4xl font-semibold text-primary/15">
              {number}
            </span>

            <h3 className="mt-3 text-lg font-semibold">
              {title}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
              {description}
            </p>

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* CTA */}
  <section className="pb-14 sm:pb-16 md:pb-20">

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <div className="rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-xl sm:px-10">

        <FaRocket className="mx-auto text-3xl" />

        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Need A Professional Website?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base">
          Let's create a fast, modern and professional website for your
          brand.
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1"
        >
          Start Your Website
          <FaArrowRight />
        </Link>

      </div>

    </div>
  </section>

</main>

);
}