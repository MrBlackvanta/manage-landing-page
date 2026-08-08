import BackgroundShapes from "@/components/background-shapes";
import { Footer, Header } from "@/components/layout";
import { Cta, Features, Hero, Testimonials } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative isolate flex-1 overflow-x-clip">
        <BackgroundShapes />
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </>
  );
}
