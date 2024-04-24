
import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"


const AllProducts = () => {
  return (
    <div className="grid grid-cols-3  ">
    {
      Products.map((product)=> (
        <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData}  category={product.category} id={product.id} /> 

      ))
    }
    
  </div>
  )
}

export default AllProducts