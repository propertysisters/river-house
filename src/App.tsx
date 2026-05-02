import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Welcome } from './components/sections/Welcome';
import { Amenities } from './components/sections/Amenities';
import { Checkout } from './components/sections/Checkout';
import { Activities } from './components/sections/Activities';
import { EatsAndDrinks } from './components/sections/EatsAndDrinks';

export function App() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Welcome />
        <Amenities />
        <Checkout />
        <Activities />
        <EatsAndDrinks />
      </main>
      <Footer />
    </>
  );
}
