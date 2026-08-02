
'use client';

import Link from 'next/link';
import {
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaFacebook,
  FaGoogle,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaChartBar,
} from 'react-icons/fa';

export default function DigitalMarketingPage() {
  const features = [
    {
      icon: FaSearch,
      title: 'SEO Services',
      description:
        'Improve your search visibility and attract relevant organic traffic to your website.',
    },
    {
      icon: FaBullhorn,
      title: 'Social Media Marketing',
      description:
        'Build your brand presence and engage with your target audience across social platforms.',
    },
    {
      icon: FaGoogle,
      title: 'Google Ads',
      description:
        'Reach high-intent customers with targeted and performance-focused paid campaigns.',
    },
    {
      icon: FaChartLine,
      title: 'Performance Marketing',
      description:
        'Data-driven marketing strategies designed to improve leads, conversions and business growth.',
    },
  ];

  const services = [
    'Search Engine Optimization',
    'Social Media Marketing',
    'Google & Meta Ads',
    'Content Marketing',
    'Lead Generation',
    'Analytics & Reporting',
    'Brand Promotion',
  ];

  const process = [
    {
      number: '01',
      title: 'Market Research',
      description:
        'We understand your industry, audience, competitors and business goals.',
    },
    {
      number: '02',
      title: 'Strategy Planning',
      description:
        'We create a focused marketing strategy based on your target audience and objectives.',
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description:
        'Our team executes SEO, social media and paid marketing campaigns.',
    },
    {
      number: '04',
      title: 'Measure & Optimize',
      description:
        'We track results, analyze performance and continuously improve campaigns.',
    },
  ];

  const benefits = [
    'Data-driven marketing strategy',
    'Targeted customer acquisition',
    'SEO-focused growth',
    'Performance tracking',
    'Continuous campaign optimization',
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-white">

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid min-h-[600px] items-center gap-8 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-28">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm sm:text-sm">
                <FaBullhorn />
                Digital Marketing Services
              </div>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Grow Your Brand
                <span className="mt-1 block text-white/75">
                  Reach More Customers
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                We create result-driven digital marketing strategies that
                help businesses increase visibility, generate leads and
                achieve sustainable online growth.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl sm:px-7 sm:text-base"
                >
                  Grow Your Business
                  <FaArrowRight />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 sm:px-7 sm:text-base"
                >
                  Explore Services
                </Link>

              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-white/75">

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Data Driven
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  ROI Focused
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Result Oriented
                </div>

              </div>

            </div>


            <div className="relative">

              <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

                <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-7">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <FaChartLine className="text-2xl text-primary" />

                      <span className="font-semibold text-gray-900">
                        Marketing Analytics
                      </span>
                    </div>

                    <FaRocket className="text-primary" />

                  </div>


                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-primary/5 p-4">

                      <FaUsers className="text-2xl text-primary" />

                      <div className="mt-3 h-2 w-16 rounded-full bg-primary/20" />

                      <div className="mt-2 h-2 w-24 rounded-full bg-gray-100" />

                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">

                      <FaGlobe className="text-2xl text-primary" />

                      <div className="mt-3 h-2 w-16 rounded-full bg-gray-200" />

                      <div className="mt-2 h-2 w-24 rounded-full bg-gray-100" />

                    </div>

                  </div>


                  <div className="mt-3 rounded-xl bg-gray-50 p-4">

                    <div className="flex items-end gap-2">

                      <div className="h-12 w-5 rounded-t bg-primary/20" />
                      <div className="h-20 w-5 rounded-t bg-primary/30" />
                      <div className="h-14 w-5 rounded-t bg-primary/40" />
                      <div className="h-28 w-5 rounded-t bg-primary" />
                      <div className="h-24 w-5 rounded-t bg-primary/70" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="py-14 sm:py-16 md:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:gap-8 lg:grid-cols-2 lg:px-8">

          <div>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Digital Growth Solutions
            </span>

            <h2 className="mt-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Turn Online Visibility
              <span className="block text-primary">
                Into Business Growth
              </span>
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-gray-600 sm:text-lg">
              Digital marketing is more than getting traffic. We focus on
              reaching the right audience, generating quality leads and
              improving measurable business results.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                >

                  <FaCheckCircle className="mt-0.5 text-primary" />

                  <span className="text-sm font-semibold leading-6 text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <FaChartBar className="text-3xl text-primary" />
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Complete Marketing Services
            </h3>

            <p className="mt-3 text-sm font-medium leading-6 text-gray-600 sm:text-base">
              From organic search growth to paid advertising, we provide
              complete digital marketing solutions.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {services.map((service) => (

                <span
                  key={service}
                  className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
                >
                  {service}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              What We Do
            </span>

            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              Digital Marketing Services
            </h2>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary">
                    <Icon className="text-xl text-primary group-hover:text-white" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Process
            </span>

            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              Strategy to Results
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
              >

                <span className="text-4xl font-semibold text-primary/10">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-primary" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="pb-14 sm:pb-16 md:pb-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12 md:px-16 md:py-14">

            <FaRocket className="mx-auto text-4xl" />

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Ready to Grow Your Business?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base md:text-lg">
              Let's create a digital marketing strategy that reaches
              your audience and drives measurable growth.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl"
            >
              Start Marketing
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
