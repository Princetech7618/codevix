import { FaCode, FaShieldAlt } from 'react-icons/fa';

const TechIcon = ({ children }) => (
  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 text-sky-500 text-3xl border border-sky-100">
    {children}
  </div>
);


// --- ADVANCED SEO METADATA ---
export const metadata = {
  title: 'Technology Stack | HTML, CSS, React, Tailwind, Next.js & Node.js - Codevix',
  description:
    'Codevix builds modern SEO-friendly websites and web apps using HTML, CSS, React, Tailwind, Next.js, and Node.js. Secure, scalable, performance-first delivery.',
  keywords: [
    'HTML development',
    'CSS development',
    'React development',
    'Tailwind CSS',
    'Next.js',
    'Node.js',
    'SEO friendly web development',
    'digital marketing website',
  ].join(', '),
  openGraph: {
    title: 'Modern Web Stack | React, Tailwind, Next.js & Node.js - Codevix',
    description:
      'Building fast, secure, and scalable web experiences with React, Next.js, Tailwind, and Node.js.',
    url: 'https://codevix.com/technologies',
    siteName: 'Codevix',
    images: [
      {
        url: '/tech-banner.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}; 

export default function Technologies() {
  const techStack = [
    {
      category: "Web Foundations",
      description: "Building clean, accessible, SEO-ready interfaces using HTML and CSS.",
      techs: [
        { name: "HTML", icon: <TechIcon>HTML</TechIcon>, desc: "Semantic markup for fast, structured pages." },
        { name: "CSS", icon: <TechIcon>CSS</TechIcon>, desc: "Responsive styling with modern layout techniques." },
        { name: "Tailwind CSS", icon: <TechIcon>TW</TechIcon>, desc: "Utility-first design for rapid, consistent UI." },
      ],
    },
    {
      category: "Frontend & UI",
      description: "Component-driven UI with React for scalable user experiences.",
      techs: [
        { name: "React", icon: <TechIcon>React</TechIcon>, desc: "Reusable components and performant rendering." },
        { name: "Next.js", icon: <TechIcon>Next</TechIcon>, desc: "SEO-friendly routing and production-ready React apps." },
      ],
    },
    {
      category: "Backend & JavaScript Runtime",
      description: "Reliable server-side logic and integrations using Node.js.",
      techs: [
        { name: "Node.js", icon: <TechIcon>Node</TechIcon>, desc: "Event-driven backend services and integrations." },
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Header with SEO Optimized H1 */}
      <section className="bg-linear-to-br from-light via-light-100 to-sky-50 pt-20 pb-24 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-white/80 border border-secondary text-primary px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-sm">
            <FaShieldAlt className="inline mr-2 text-accent" /> SECURE TECHNOLOGY EXPERTS
          </div>
            <h3 className="text-3xl md:text-5xl font-semibold text-primary mb-6">

            Our Core <span className="text-accent">Technology Stack</span>
          </h3>
          <p className="text-lg text-muted max-w-3xl mx-auto font-medium leading-relaxed">
            Codevix builds secure, scalable applications using the latest programming languages and cloud infrastructures. We transform your business ideas into reality.
          </p>
        </div>
      </section>

      {/* Tech Cards Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {techStack.map((group, idx) => (
            <div key={idx} className="animate-on-scroll">
              <div className="mb-12 border-l-4 border-secondary pl-6">
            <h2 className="text-3xl font-semibold text-primary">{group.category}</h2>

                <p className="text-muted font-medium mt-2">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.techs.map((tech, i) => (
                  <article key={i} className="group p-8 rounded-3xl bg-white border border-light-100 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300">
                    <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted leading-snug font-medium">
                      {tech.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-primary to-secondary rounded-[40px] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Want to Build a Secure Application?</h2>

            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Consult with our technology experts today and choose the right stack for your business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="bg-accent text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:bg-white hover:text-primary transition-all">
                Get a Free Consultation
              </a>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}