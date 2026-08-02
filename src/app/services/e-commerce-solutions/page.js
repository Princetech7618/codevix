'use client';

import Link from 'next/link';
import {
FaShoppingCart,
FaCreditCard,
FaBoxOpen,
FaChartLine,
FaMobileAlt,
FaCheckCircle,
FaArrowRight,
FaRocket,
FaLock,
} from 'react-icons/fa';

export default function EcommerceSolutionsPage() {
const features = [
{
icon: FaShoppingCart,
title: 'Online Store',
description:
'Modern storefronts designed to showcase products and create smooth shopping experiences.',
},
{
icon: FaCreditCard,
title: 'Payment Integration',
description:
'Secure and convenient payment experiences for your customers.',
},
{
icon: FaBoxOpen,
title: 'Inventory Management',
description:
'Organize products, stock and orders through an efficient management system.',
},
{
icon: FaChartLine,
title: 'Sales Analytics',
description:
'Understand your store performance with useful sales and customer insights.',
},
];

const highlights = [
'Responsive shopping experience',
'Product and category management',
'Secure payment integration',
'Order management',
'Inventory management',
'Sales analytics',
];

const steps = [
['01', 'Store Planning', 'We understand your products, customers and business model.'],
['02', 'UI/UX Design', 'We create a clean shopping experience focused on usability and conversions.'],
['03', 'Development', 'We develop the store, product system, checkout and required integrations.'],
['04', 'Testing & Launch', 'We test the complete shopping journey before launch.'],
];

return (
<main className="min-h-screen overflow-hidden bg-white text-gray-900">

  {/* HERO */}
  <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
            <FaShoppingCart />
            E-Commerce Solutions
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
            Turn Your Products
            <span className="block text-primary">
              Into Online Sales
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Full-featured e-commerce solutions with product management,
            payment integration, inventory control and analytics.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:text-base"
            >
              Build My Store
              <FaArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
            >
              View Services
            </Link>

          </div>

        </div>

        {/* STORE MOCKUP */}
        <div className="relative">

          <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl sm:p-4">

            <div className="rounded-2xl bg-gray-50 p-4 sm:p-5">

              <div className="flex items-center justify-between">

                <div className="h-3 w-28 rounded-full bg-primary/20" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                  <FaShoppingCart className="text-primary" />
                </div>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">

                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white p-3 shadow-sm"
                  >
                    <div className="h-24 rounded-lg bg-gray-100 sm:h-28" />

                    <div className="mt-3 h-2.5 w-3/4 rounded-full bg-gray-200" />

                    <div className="mt-2 h-2 w-1/2 rounded-full bg-primary/20" />
                  </div>
                ))}

              </div>

              <div className="mt-3 rounded-xl bg-white p-4 shadow-sm">

                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2.5 w-20 rounded-full bg-gray-200" />
                    <div className="mt-2 h-2 w-12 rounded-full bg-gray-100" />
                  </div>

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Growing
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-white p-3 shadow-xl sm:block">

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FaLock className="text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Store Experience
                </p>
                <p className="text-sm font-semibold">
                  Secure & Scalable
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

      <div className="mb-8">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Complete E-Commerce
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Everything Your Online Store Needs
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:p-6"
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

  {/* HIGHLIGHTS */}
  <section className="bg-gray-50 py-14 sm:py-16 md:py-20">

    <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

      <div>

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Built For Business
        </span>

        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl md:text-5xl">
          A Better Shopping
          <span className="block text-primary">
            Experience
          </span>
        </h2>

        <p className="mt-4 text-sm font-medium leading-7 text-gray-600 sm:text-base">
          Your online store should be easy to use, easy to manage and
          ready to grow with your business.
        </p>

      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">

        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 shadow-sm"
          >
            <FaCheckCircle className="text-primary" />
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
          From Product To Purchase
        </h2>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {steps.map(([number, title, description]) => (
          <div
            key={number}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
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
          Ready To Launch Your Online Store?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-white/80 sm:text-base">
          Let's build an e-commerce experience designed around your
          products and customers.
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-1"
        >
          Start Your Store
          <FaArrowRight />
        </Link>

      </div>

    </div>
  </section>

</main>

);
}