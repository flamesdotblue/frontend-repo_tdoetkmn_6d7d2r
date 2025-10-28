import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 min-h-[80vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial glow overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25),rgba(0,0,0,0)_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(167,139,250,0.45)]">
            Create. Share. Explore.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            A cosmic social blogging experience inspired by Reddit, Medium, and Threads — reimagined for speed, style, and immersion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_14px_40px_rgba(139,92,246,0.45)] transition-transform hover:-translate-y-0.5">
              Start Writing
            </button>
            <button className="px-5 py-3 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/15 transition">
              Explore Posts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
