import ProductCard from "../components/ProductCard"
import { products } from "../../lib/products"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import {
  Navbar,
  Footer
} from "../components";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden font-poppins min-h-screen flex flex-col">
      <header className="flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>

      {/* Main content section (with container) */}
      <div className="flex-grow">
        <div className="w-full h-auto bg-[#141414]">
          <div className="container mx-auto py-8"> {/* Adds padding and ensures center alignment */}
            <DynamicFrameLayout />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <section className="bg-primary flexCenter">
        <section className="boxWidth">
          <Footer />
        </section>
      </section>
    </main>
  )
}
