
'use client';

import Link from 'next/link';
import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaLayerGroup,
  FaChartLine,
} from 'react-icons/fa';

export default function SoftwareDevelopmentPage() {
  const features = [
    {
      icon: FaLaptopCode,
      title: 'Custom Software',
      description:
        'Business-specific software solutions designed around your unique processes and requirements.',
    },
    {
      icon: FaCogs,
      title: 'Business Automation',
      description:
        'Automate repetitive workflows and improve productivity with intelligent software solutions.',
    },
    {
      icon: FaDatabase,
      title: 'Database Solutions',
      description:
        'Reliable and scalable database architecture designed to manage your business data efficiently.',
    },
    {
      icon: FaLayerGroup,
      title: 'Scalable Architecture',
      description:
        'Software built with flexible architecture that can grow with your business.',
    },
  ];

  const technologies = [
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'PHP',
    'MySQL',
    'PostgreSQL',
  ];

  const process = [
    {
      number: '01',
      title: 'Business Analysis',
      description:
        'We understand your business processes, challenges and software requirements.',
    },
    {
      number: '02',
      title: 'Solution Planning',
      description:
        'We plan the architecture, features, workflows and technical solution.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Our team develops secure and scalable software using modern technologies.',
    },
    {
      number: '04',
      title: 'Testing & Deployment',
      description:
        'We test the system thoroughly and deploy the final solution.',
    },
  ];

  const benefits = [
    'Custom-built business solutions',
    'Secure and scalable architecture',
    'Process automation',
    'Clean and maintainable code',
    'Long-term technical support',
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
                <FaCode />
                Software Development Services
              </div>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Build Software That
                <span className="mt-1 block text-white/75">
                  Solves Real Problems
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                We develop custom software solutions that simplify
                operations, automate workflows and help businesses
                achieve sustainable growth.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl sm:px-7 sm:text-base"
                >
                  Build Your Software
                  <FaArrowRight />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:px-7 sm:text-base"
                >
                  Explore Services
                </Link>

              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-white/75">

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Custom Solutions
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Scalable
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Secure
                </div>

              </div>

            </div>


            <div className="relative">

              <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

                <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-7">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <FaCode className="text-2xl text-primary" />

                      <span className="font-semibold text-gray-900">
                        Software System
                      </span>
                    </div>

                    <span className="h-3 w-3 rounded-full bg-green-400" />

                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-xl bg-gray-50 p-4">
                      <FaCogs className="text-2xl text-primary" />
                      <div className="mt-3 h-2 w-20 rounded-full bg-gray-200" />
                    </div>

                    <div className="rounded-xl bg-primary/5 p-4">
                      <FaDatabase className="text-2xl text-primary" />
                      <div className="mt-3 h-2 w-20 rounded-full bg-primary/20" />
                    </div>

                  </div>

                  <div className="mt-3 rounded-xl bg-gray-50 p-4">

                    <div className="flex gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200" />
                      <div className="h-2 w-20 rounded-full bg-primary/20" />
                    </div>

                    <div className="mt-4 h-24 rounded-lg bg-white shadow-sm" />

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
              Custom Software Solutions
            </span>

            <h2 className="mt-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Technology Built Around
              <span className="block text-primary">
                Your Business
              </span>
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-gray-600 sm:text-lg">
              Off-the-shelf software doesn't always fit every business.
              We create custom solutions that match your workflows,
              goals and growth plans.
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
              <FaLayerGroup className="text-3xl text-primary" />
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Modern Technology Stack
            </h3>

            <p className="mt-3 text-sm font-medium leading-6 text-gray-600 sm:text-base">
              We use reliable technologies to build secure, scalable
              and maintainable software systems.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

            <div className="mt-6 flex items-center gap-2.5 rounded-2xl bg-gray-50 p-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaShieldAlt className="text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Secure Architecture
                </p>

                <p className="text-xs text-gray-500">
                  Designed for reliability and growth.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Capabilities
            </span>

            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              Software Development Services
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
              From Requirement to Deployment
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

            <FaChartLine className="mx-auto text-4xl" />

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Need Custom Software?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base md:text-lg">
              Let's build a software solution that makes your business
              smarter, faster and more efficient.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg hover:-translate-y-1 hover:shadow-2xl"
            >
              Discuss Your Project
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

