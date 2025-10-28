import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-black selection:bg-fuchsia-500/30 selection:text-white">
      {/* Gradient edge glow */}
      <div className="pointer-events-none fixed inset-0 bg-[conic-gradient(at_10%_10%,rgba(168,85,247,0.10),transparent_25%,rgba(59,130,246,0.10),transparent_50%,rgba(34,197,94,0.10),transparent_75%)]" />

      <Header />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
