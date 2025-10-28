export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative py-10 border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">
          © {year} Nebula Notes — Crafted for immersive storytelling.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#privacy" className="text-white/70 hover:text-white transition">Privacy</a>
          <a href="#terms" className="text-white/70 hover:text-white transition">Terms</a>
          <a href="#status" className="text-white/70 hover:text-white transition">Status</a>
        </div>
      </div>
    </footer>
  );
}
