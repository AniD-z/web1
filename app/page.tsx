import {
  Navbar,
  Hero,
  Stats,
  Billing,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,

} from "./components";
import SineCurveAnimation from "./components/SineCurveAnimation"

export default function Home() {
  return (
    <main className=" bg-primary w-full overflow-hidden font-poppins">
      <header className="flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>
      <section className=" bg-primary flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>
      <section className=" bg-primary paddingX flexStart">
        <section className="boxWidth">
          <Business />
          <SineCurveAnimation />
          <CardDeal />
          <CTA />
          <Testimonials />
        </section>
      </section>
      <section className=" bg-primary ">
      <section className="boxWidth">
      <Footer />
      </section>

      </section>
    </main>
  );
}
