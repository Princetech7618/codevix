
'use client';

import Link from 'next/link';
import {
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

export default function MobileAppDevelopmentPage() {
  const features = [
    {
      icon: FaMobileAlt,
      title: 'Android App Development',
      description:
        'Modern and scalable Android applications designed for performance, usability and business growth.',
    },
    {
      icon: FaApple,
      title: 'iOS App Development',
      description:
        'Beautiful and reliable iOS applications built to deliver smooth experiences across Apple devices.',
    },
    {
      icon: FaLayerGroup,
      title: 'Cross-Platform Apps',
      description:
        'Cost-effective applications that work across multiple platforms with a consistent user experience.',
    },
    {
      icon: FaRocket,
      title: 'High Performance',
      description:
        'Fast, optimized and responsive mobile applications built for excellent performance.',
    },
  ];

  const technologies = [
    'React Native',
    'Flutter',
    'JavaScript',
    'Android',
    'iOS',
    'Firebase',
    'Node.js',
  ];

  const process = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description:
        'We understand your app idea, users, business goals and technical requirements.',
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description:
        'We create intuitive interfaces and user journeys focused on usability.',
    },
    {
      number: '03',
      title: 'App Development',
      description:
        'Our developers build secure, scalable and high-performance mobile applications.',
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description:
        'We test the application across devices and prepare it for production launch.',
    },
  ];

  const benefits = [
    'User-friendly mobile experiences',
    'Android and iOS support',
    'Fast and optimized performance',
    'Secure application architecture',
    'Scalable and maintainable code',
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-white">

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid min-h-[600px] items-center gap-8 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-28">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm sm:text-sm">
                <FaMobileAlt />
                Mobile App Development
              </div>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Build Powerful
                <span className="mt-1 block text-white/75">
                  Mobile Experiences
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                We create modern, secure and high-performance mobile
                applications that help businesses connect with customers
                and grow digitally.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">

                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-7 sm:text-base"
                >
                  Start Your App
                  <FaArrowRight />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 sm:px-7 sm:text-base"
                >
                  Explore Services
                </Link>

              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-white/75">

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Android & iOS
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  Secure
                </div>

                <div className="flex items-center gap-1.5">
                  <FaCheckCircle />
                  High Performance
                </div>

              </div>

            </div>


            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

              <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

                <div className="mx-auto max-w-sm rounded-[2rem] border-4 border-gray-800 bg-white p-2 shadow-2xl">

                  <div className="overflow-hidden rounded-[1.5rem] bg-gray-50">

                    <div className="flex items-center justify-between bg-primary px-5 py-4 text-white">

                      <div className="h-2 w-20 rounded-full bg-white/40" />

                      <FaMobileAlt />

                    </div>

                    <div className="space-y-3 p-5">

                      <div className="rounded-2xl bg-primary/10 p-5">
                        <FaRocket className="text-3xl text-primary" />
                        <div className="mt-4 h-3 w-28 rounded-full bg-primary/20" />
                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">

                        <div className="rounded-xl bg-white p-4 shadow-sm">
                          <FaAndroid className="text-2xl text-primary" />
                          <div className="mt-3 h-2 w-16 rounded-full bg-gray-200" />
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow-sm">
                          <FaApple className="text-2xl text-primary" />
                          <div className="mt-3 h-2 w-16 rounded-full bg-gray-200" />
                        </div>

                      </div>

                      <div className="h-20 rounded-xl bg-white shadow-sm" />

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

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
              Mobile Solutions
            </span>

            <h2 className="mt-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Apps Designed
              <span className="block text-primary">
                For Real Business Results
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-lg">
              From startup applications to enterprise mobile platforms,
              we create digital products that are easy to use, scalable
              and focused on business outcomes.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-primary" />

                  <span className="text-sm font-semibold leading-6 text-gray-700">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>


          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <FaCode className="text-3xl text-primary" />
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Modern App Technology
            </h3>

            <p className="mt-3 text-sm font-medium leading-6 text-gray-600 sm:text-base">
              We use modern frameworks and technologies to build
              reliable and future-ready mobile applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
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
                  Secure & Scalable
                </p>

                <p className="text-xs text-gray-500">
                  Built for long-term growth.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              What We Build
            </span>

            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
              Mobile App Development Services
            </h2>

            <p className="mt-3 text-sm font-medium leading-7 text-gray-600 sm:text-base md:text-lg">
              Complete mobile application development services for
              startups, businesses and growing enterprises.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg sm:p-6"
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
              From Idea to App Store
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6"
              >

                <span className="text-4xl font-semibold text-primary/10 group-hover:text-primary/20">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-primary transition-all group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="pb-14 sm:pb-16 md:pb-20">

        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12 md:px-16 md:py-14">

            <FaMobileAlt className="mx-auto text-4xl" />

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
              Have an App Idea?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base md:text-lg">
              Let's transform your idea into a powerful mobile application
              that your customers will love.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Start Your App
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

