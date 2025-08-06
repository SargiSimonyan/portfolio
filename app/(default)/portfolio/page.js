import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Personal Blog',
    description: 'A minimalistic blog built with Next.js, Markdown and Tailwind CSS.',
    github: 'https://github.com/SargiSimonyan/BlogList',
    live: 'https://blog-list-sigma.vercel.app/',
    tech: ['Next.js', 'Markdown', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Tartoon',
    description: ' Furnitur shop, Online shop, Full-featured e-commerce site with Stripe payments and CMS.',
    github: 'https://github.com/SargiSimonyan/tartoon',
    live: 'https://tartoon.vercel.app/',
    tech: ['Next.js', 'Tailwindcss'],
  },
  {
    id: 3,
    title: 'Crypto-currency',
    description: 'Just about crypto currency single page projct.',
    github: 'https://github.com/SargiSimonyan/crypto-currency-values',
    live: 'https://crypto-currency-values-d5mv.vercel.app/',
    tech: ['Next.js', 'Tailwindcss'],
  },
  {
    id: 4,
    title: 'Social page',
    description: 'Social page for example you may to create account or log in (sargis sargis2002).',
    github: 'https://github.com/SargiSimonyan/social-page',
    live: 'https://social-page-alpha.vercel.app/',
    tech: ['Next.js', 'Tailwindcss'],
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Featured Projects</h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map(({ id, title, description, github, live, tech }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
          >
            <h2 className="text-2xl font-semibold mb-2 text-red-900">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-6 items-center mt-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
