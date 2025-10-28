import { motion } from 'framer-motion';
import { Rocket, Users, Shield, Stars } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning Fast',
    desc: 'Framer Motion animations, route transitions, and fine-tuned performance for a silky 120fps feel.',
    color: 'from-fuchsia-500/20 to-indigo-500/20',
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.35)]',
  },
  {
    icon: Users,
    title: 'Communities',
    desc: 'Join vibrant spaces, collaborate, and build audiences with role-based moderation tools.',
    color: 'from-cyan-500/20 to-emerald-500/20',
    glow: 'shadow-[0_0_30px_rgba(34,197,94,0.35)]',
  },
  {
    icon: Stars,
    title: 'Rich Editing',
    desc: 'Write with a modern editor, media uploads, markdown preview, AI helpers, and autosave drafts.',
    color: 'from-amber-500/20 to-pink-500/20',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Firebase authentication, server-side validation, and Cloudflare Turnstile to keep bots at bay.',
    color: 'from-blue-500/20 to-violet-500/20',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.35)]',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black/40 to-black/60">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Designed for expression and speed
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A modern glassmorphic UI with neon glows and immersive motion — optimized for creators and communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition ${f.glow}`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} border border-white/10 flex items-center justify-center mb-4`}> 
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
