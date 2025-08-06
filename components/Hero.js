import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/laptop.jpg" 
          alt="Hero background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>

      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Hi, I’m Sargis</h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto">
          I build fast, modern web apps using Next.js & Tailwind.
        </p>
        <a
          href="/portfolio"
          className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
