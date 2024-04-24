import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import heroimg from "@/asset/Images/hero-poster.webp"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="py-6 flex flex-col lg:flex-row gap-y-10">
        {/* lef section */}
        <div className="flex-1">
        <Badge className="py-3 px-3 rounded-lg bg-blue-200 text-blue-700">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className="bg-black h-12 px-8 mt-4 text-white font-semibold">Start Shopping</Button>

        </div>
         
         {/* right section */}
         <div className="flex-1">
           <Image src={heroimg} alt="hero"/> 
         </div>
    </section>
  )
}

export default Hero