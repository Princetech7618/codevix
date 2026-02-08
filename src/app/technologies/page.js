import { 
  FaJava, FaPython, FaReact, FaNodeJs, FaPhp, FaLaravel, 
  FaAws, FaDigitalOcean, FaDatabase, FaMobileAlt, FaDesktop, FaShieldAlt 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiDjango, SiFlask, SiNextdotjs, SiPostgresql, 
  SiMysql, SiMongodb, SiFlutter, SiElectron, SiJavascript 
} from 'react-icons/si';

// --- ADVANCED SEO METADATA ---
export const metadata = {
  title: 'Top Technology Stack | Java, Python, AWS & React Development - Softnexis',
  description: 'Softnexis Gentech specializes in high-performance application development using Java, Spring Boot, Python, React, Next.js, and AWS. We build secure and scalable enterprise solutions.',
  keywords: 'Java development, Spring Boot microservices, Python Django Flask, React JS experts, Next.js development company, AWS EC2 RDS deployment, PostgreSQL MySQL database management, Flutter mobile apps, Electron JS desktop apps, Softnexis technologies,Real-time Chat App WebSockets,Softnexis Gentech technologies,B2C Travel CRM technology',
  openGraph: {
    title: 'Modern Technology Stack at Softnexis Gentech',
    description: 'Building secure, scalable, and robust applications with modern technologies.',
    url: 'https://softnexis.in/technologies',
    siteName: 'Softnexis Gentech',
    images: [
      {
        url: '/tech-banner.jpg', // Aap ye image public folder mein add kar sakte hain
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
      category: "Backend Development",
      description: "We build robust and secure server-side architectures using industry-leading frameworks like Spring Boot and Django.",
      techs: [
        { name: "Java", icon: <FaJava className="text-[#007396]" />, desc: "Enterprise-grade scalable language for heavy workloads." },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, desc: "Microservices & secure high-speed API development." },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, desc: "Advanced scripting for AI, ML & Automation." },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" />, desc: "High-level web framework for rapid development." },
        { name: "Flask", icon: <SiFlask className="text-black" />, desc: "Efficient lightweight web application framework." },
        { name: "PHP / Laravel", icon: <FaLaravel className="text-[#FF2D20]" />, desc: "Elegant and expressive PHP applications." },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, desc: "Fast event-driven network applications." }
      ]
    },
    {
      category: "Frontend & Web Technologies",
      description: "Creating SEO-optimized, fast, and responsive user interfaces with Next.js and React.",
      techs: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, desc: "Powering modern interactive web features." },
        { name: "React JS", icon: <FaReact className="text-[#61DAFB]" />, desc: "Efficient component-based UI development." },
        { name: "Next JS", icon: <SiNextdotjs className="text-black" />, desc: "Production-ready, SEO-friendly React apps." }
      ]
    },
    {
      category: "Cloud Deployment & Hosting",
      description: "Scalable cloud infrastructure on AWS and Digital Ocean for maximum uptime.",
      techs: [
        { name: "AWS EC2", icon: <FaAws className="text-[#FF9900]" />, desc: "Secure virtual servers for hosting." },
        { name: "AWS Beanstalk", icon: <FaAws className="text-[#FF9900]" />, desc: "Seamless app scaling and management." },
        { name: "AWS RDS", icon: <FaDatabase className="text-[#333]" />, desc: "High-performance managed databases." },
        { name: "Digital Ocean", icon: <FaDigitalOcean className="text-[#0080FF]" />, desc: "Reliable developer-friendly cloud hosting." }
      ]
    },
    {
      category: "Secure Databases",
      description: "Managed data storage solutions with PostgreSQL, MySQL, and MongoDB.",
      techs: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, desc: "The world's most advanced open-source DB." },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, desc: "Reliable relational database management." },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, desc: "Scalable NoSQL document database." }
      ]
    },
    {
      category: "Mobile & Desktop Solutions",
      description: "Building cross-platform apps with Flutter, React Native, and Electron.",
      techs: [
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" />, desc: "Native mobile performance with React." },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" />, desc: "High-quality beautiful mobile UIs." },
        { name: "Electron JS", icon: <SiElectron className="text-[#47848F]" />, desc: "Powerful cross-platform desktop software." }
      ]
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Header with SEO Optimized H1 */}
      <section className="bg-linear-to-br from-light via-light-100 to-green-50 pt-20 pb-24 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-white/80 border border-secondary text-primary px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-sm">
            <FaShieldAlt className="inline mr-2 text-accent" /> SECURE TECHNOLOGY EXPERTS
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-6">
            Our Core <span className="text-accent">Technology Stack</span>
          </h3>
          <p className="text-lg text-muted max-w-3xl mx-auto font-medium leading-relaxed">
            Softnexis Gentech builds secure, scalable applications using the latest programming languages and cloud infrastructures. We transform your business ideas into reality.
          </p>
        </div>
      </section>

      {/* Tech Cards Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {techStack.map((group, idx) => (
            <div key={idx} className="animate-on-scroll">
              <div className="mb-12 border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-bold text-primary">{group.category}</h2>
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Want to Build a Secure Application?</h2>
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