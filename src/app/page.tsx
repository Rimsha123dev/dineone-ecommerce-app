import Image from 'next/image'
import Hero from "@/app/layout/view/Hero"
import ProductList from "@/app/layout/view/ProductList" 
import { Footer } from './layout/view/Footer'

export default function Home() {
  return (
<div>

   <Hero/>
  
<ProductList/>
<Footer/>
</div>
   
  )
}
