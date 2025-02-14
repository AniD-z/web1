import {
  Navbar,
  Hero,

  Business,
  CardDeal,
  Testimonials,
  
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
