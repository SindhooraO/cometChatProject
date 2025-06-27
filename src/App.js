import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Programs from './components/Programs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Hero />
      <Advantages />
      <Programs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
