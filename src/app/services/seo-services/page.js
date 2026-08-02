'use client';

import Link from 'next/link';
import {
FaSearch,
FaChartLine,
FaGlobe,
FaBullseye,
FaCheckCircle,
FaArrowRight,
FaRocket,
FaLayerGroup,
FaMobileAlt,
FaLink,
} from 'react-icons/fa';

export default function SEOServicesPage() {
const services = [
{
icon: FaSearch,
title: 'Keyword Strategy',
description:
'Research-driven keyword strategies designed around your audience, industry and business goals.',
},
{
icon: FaGlobe,
title: 'On-Page SEO',
description:
'Optimized pages, headings, content structure and metadata designed for better search visibility.',
},
{
icon: FaLink,
title: 'Technical SEO',
description:
'Technical improvements focused on crawlability, performance, indexing and website structure.',
},
{
icon: FaChartLine,
title: 'SEO Analytics',
description:
'Track rankings, organic traffic and important performance indicators to understand your growth.',
},
];

const benefits = [
'Improve organic search visibility',
'Drive relevant website traffic',
'Build long-term search presence',
'Optimize website structure',
'Monitor SEO performance',
'Reach high-intent audiences',
];

const process = [
{
number: '01',
title: 'SEO Audit',
description:
'We analyze your website, technical structure, content and current search performance.',
},
{
number: '02',
title: 'Strategy',
description:
'We create a practical SEO strategy based on keywords, competition and business objectives.',
},
{
number: '03',
title: 'Optimization',
description:
'Our team improves website content, technical elements and on-page SEO factors.',
},
{
number: '04',
title: 'Monitor & Improve',
description:
'We monitor important SEO metrics and continuously identify opportunities for improvement.',
},
];

return (
<main className="min-h-screen overflow-hidden bg-white text-gray-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-primary text-white">

    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />

    <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid min-h-[570px] items-center gap-8 py-20 lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:py-24">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md sm:text-sm">
            <FaSearch />
            SEO Services
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Get Found By The
            <span className="block text-white/70">
              Right Audience
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8">
            Search engine optimization strategies designed to improve
            your online visibility, attract relevant organic traffic and
            support long-term business growth.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1 hover:shadow-2xl sm:text-base"
            >
              Get SEO Consultation
              <FaArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20 sm:text-base"
            >
              Explore Services
            </Link>

          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/75">

            <span className="flex items-center gap-1.5">
              <FaCheckCircle /> Organic Growth
            </span>

            <span className="flex items-center gap-1.5">
              <FaCheckCircle /> Technical Optimization
            </span>

            <span className="flex items-center gap-1.5">
              <FaCheckCircle /> Performance Tracking
            </span>

          </div>

        </div>

        {/* SEO VISUAL */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

            <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">

              <div className="flex items-center gap-2 border-b border-gray-100 pb-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <FaSearch className="text-primary" />
                </div>

                <div className="flex-1">
                  <div className="h-2.5 w-24 rounded-full bg-gray-200" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-gray-100" />
                </div>

              </div>

              <div className="mt-5 space-y-3">

                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">
                      Organic Visibility
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      +78%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-4/5 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-primary/5 p-4">
                    <FaChartLine className="text-primary" />
                    <p className="mt-3 text-xs font-medium text-gray-500">
                      Traffic
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      Growing
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <FaBullseye className="text-primary" />
                    <p className="mt-3 text-xs font-medium text-gray-500">
                      Target
                    </p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      Focused
                    </p>
                  </div>

                </div>

                <div className="h-20 rounded-xl bg-gray-50" />

              </div>

            </div>

          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-white p-3 shadow-xl sm:block">

            <div className="flex items-center gap-2.5">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaRocket className="text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  SEO Strategy
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Built For Growth
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

  {/* SERVICES */}
  <section className="py-14 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mb-8 max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          What We Do
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          SEO That Supports
          <span className="text-primary"> Real Growth</span>
        </h2>

        <p className="mt-3 text-sm font-medium leading-7 text-gray-600 sm:text-base">
          A complete approach covering strategy, technical optimization,
          content structure and performance measurement.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {services.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:p-6"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary">
                <Icon className="text-lg text-primary transition group-hover:text-white" />
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

  {/* BENEFITS */}
  <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

    <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Why SEO Matters
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Build A Stronger
          <span className="block text-primary">
            Online Presence
          </span>
        </h2>

        <p className="mt-4 text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Effective SEO helps your business become easier to discover
          when potential customers are actively searching for products
          and services like yours.
        </p>

      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">

        {benefits.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm"
          >
            <FaCheckCircle className="flex-shrink-0 text-primary" />
            <span className="text-sm font-medium text-gray-700">
              {item}
            </span>
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
          Our Approach
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          A Smarter SEO Process
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {process.map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
          >

            <span className="text-4xl font-semibold text-primary/15">
              {item.number}
            </span>

            <h3 className="mt-3 text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
              {item.description}
            </p>

            <div className="mt-4 h-1 w-9 rounded-full bg-primary" />

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* CTA */}
  <section className="pb-14 sm:pb-16 md:pb-20">

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">

        <div className="relative">

          <FaRocket className="mx-auto text-3xl" />

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Ready To Grow Your Visibility?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base">
            Let's create an SEO strategy that puts your business in
            front of the right audience.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Start Your SEO Journey
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>

  </section>

</main>

);
}