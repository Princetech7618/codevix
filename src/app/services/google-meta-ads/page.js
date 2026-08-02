'use client';

import Link from 'next/link';
import {
FaBullhorn,
FaGoogle,
FaFacebook,
FaChartLine,
FaBullseye,
FaUsers,
FaCheckCircle,
FaArrowRight,
FaRocket,
FaMousePointer,
} from 'react-icons/fa';

export default function GoogleMetaAdsPage() {
const platforms = [
{
icon: FaGoogle,
title: 'Google Ads',
description:
'Reach people actively searching for products and services related to your business.',
},
{
icon: FaFacebook,
title: 'Meta Ads',
description:
'Reach targeted audiences across Facebook and Instagram with engaging campaigns.',
},
{
icon: FaBullseye,
title: 'Audience Targeting',
description:
'Build campaigns around relevant audiences, interests and business objectives.',
},
{
icon: FaChartLine,
title: 'Campaign Analytics',
description:
'Monitor campaign performance and identify opportunities for optimization.',
},
];

const benefits = [
'Targeted advertising campaigns',
'Audience-focused strategy',
'Creative ad planning',
'Lead generation campaigns',
'Performance monitoring',
'Continuous optimization',
];

const process = [
['01', 'Research', 'We understand your business, market, audience and advertising goals.'],
['02', 'Campaign Setup', 'We structure campaigns, targeting, creatives and conversion goals.'],
['03', 'Launch', 'Campaigns go live with focused targeting and performance tracking.'],
['04', 'Optimize', 'We analyze performance and continuously improve campaign efficiency.'],
];

return (
<main className="min-h-screen overflow-hidden bg-white text-gray-900">

  {/* HERO */}
  <section className="relative overflow-hidden bg-gray-950 text-white">

    <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid min-h-[600px] items-center gap-8 py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:py-24">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            <FaBullhorn className="text-primary" />
            Google & Meta Ads
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Reach More People.
            <span className="block text-primary">
              Generate Better Leads.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Targeted Google and Meta advertising campaigns designed to
            drive traffic, generate qualified leads and accelerate
            business growth.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-primary/20 sm:text-base"
            >
              Start Advertising
              <FaArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>

          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-gray-400">

            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-primary" />
              Targeted Campaigns
            </span>

            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-primary" />
              Lead Generation
            </span>

            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-primary" />
              Performance Tracking
            </span>

          </div>

        </div>

        {/* ADS DASHBOARD */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:p-4">

            <div className="rounded-2xl bg-white p-5 text-gray-900 shadow-xl sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-medium text-gray-500">
                    Campaign Performance
                  </p>

                  <p className="mt-1 text-2xl font-semibold">
                    +64.8%
                  </p>

                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <FaChartLine className="text-primary" />
                </div>

              </div>

              {/* Fake Graph */}
              <div className="mt-6 flex h-32 items-end gap-2">

                {[35, 48, 42, 65, 58, 76, 90].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-lg bg-primary/10"
                    style={{ height: `${height}%` }}
                  >
                    <div className="h-full w-full rounded-t-lg bg-primary/70" />
                  </div>
                ))}

              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-gray-50 p-4">

                  <FaUsers className="text-primary" />

                  <p className="mt-2 text-xs font-medium text-gray-500">
                    Audience
                  </p>

                  <p className="mt-1 font-semibold">
                    Targeted
                  </p>

                </div>

                <div className="rounded-xl bg-primary/5 p-4">

                  <FaMousePointer className="text-primary" />

                  <p className="mt-2 text-xs font-medium text-gray-500">
                    Engagement
                  </p>

                  <p className="mt-1 font-semibold">
                    Growing
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-white p-3 shadow-xl sm:block">

            <div className="flex items-center gap-2.5">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaBullseye className="text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Campaign Strategy
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  Audience Focused
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

  {/* PLATFORMS */}
  <section className="py-14 sm:py-16 md:py-20">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mb-8">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Advertising Solutions
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Put Your Business
          <span className="text-primary"> In Front Of Customers</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Campaigns designed around your business goals, target audience
          and growth opportunities.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {platforms.map((item) => {
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

  {/* BENEFITS */}
  <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

    <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Campaign Advantages
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Advertising With
          <span className="block text-primary">
            A Clear Strategy
          </span>
        </h2>

        <p className="mt-4 text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Successful advertising requires more than launching ads. We
          focus on audience, campaign structure, creative direction and
          ongoing optimization.
        </p>

      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">

        {benefits.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 shadow-sm"
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
          Our Process
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          From Strategy To Scale
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {process.map(([number, title, description]) => (
          <div
            key={number}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:p-6"
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

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10" />

        <div className="relative">

          <FaRocket className="mx-auto text-3xl" />

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Ready To Grow Your Business?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base">
            Let's create targeted advertising campaigns designed to
            generate traffic, leads and business opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            Launch Your Campaign
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  </section>

</main>

);
}