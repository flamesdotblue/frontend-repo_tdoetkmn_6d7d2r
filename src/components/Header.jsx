import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              <Rocket className="w-5 h-5 text-fuchsia-300" />
            </div>
            <span className="font-semibold tracking-tight text-white/90">
              Nebula Notes
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-white/70 hover:text-white transition" href="#features">Features</a>
            <a className="text-white/70 hover:text-white transition" href="#showcase">Showcase</a>
            <a className="text-white/70 hover:text-white transition" href="#contact">Contact</a>
            <button className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/15 transition shadow-[0_0_20px_rgba(255,255,255,0.06)]">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2">
              <a className="block px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10" href="#features">Features</a>
              <a className="block px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10" href="#showcase">Showcase</a>
              <a className="block px-3 py-2 rounded-lg bg-white/5 text-white/80 border border-white/10" href="#contact">Contact</a>
              <button className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/10">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
