import ProductCard from "../components/ProductCard"
import { products } from "../../lib/products"
import {
  Navbar,
  Footer
} from "../components";

export default function Home() {
  return (
    <main className=" bg-primary w-full overflow-hidden font-poppins">
      <header className="flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 padding">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />))}

    </section>
    <section className=" bg-primary flexCenter">
        <section className="boxWidth">
      
          <Footer />
        </section>
      </section>
    </main>
  )
}

