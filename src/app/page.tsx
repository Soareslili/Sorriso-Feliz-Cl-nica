import { Hero } from "./_components/hero";
import { Treatment } from "./_components/treatment";
import { Testimony } from "./_components/testimony";
import { Contact } from "./_components/Contact";




export default function Home() {

  return (
    <main>
      <Hero />
      <Treatment/>
      <Testimony />
      <Contact />
    </main>
  )

}