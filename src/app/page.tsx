import { Hero } from "./_components/hero";
import { Treatment } from "./_components/treatment";
import { Testimony } from "./_components/testimony";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";




export default function Home() {

  return (
    <main>
      <Hero />
      <Treatment/>
      <Testimony />
      <Contact />
      <Footer />
    </main>
  )

}