import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Collection from '@/components/Collection';
import Experience from '@/components/Experience';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import SignupForm from '@/components/SignupForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <Hero />
      <Ticker />
      <Collection />
      <Experience />
      <Brands />
      <Testimonials />
      <SignupForm />
      <FAQ />
      <Footer />
    </div>
  );
}
