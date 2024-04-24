

import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import Image, { StaticImageData } from "next/image"


const ProductList = () => {
  
    const productChecks = Products.slice(0,3);
  
  return (
    <div className="flex justify-evenly mt-16 py-10">
      {
        productChecks.map((product)=> (
          <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData}  category={product.category} id={product.id }/> 

        ))
      }
      
    </div>
  )
}

export default ProductList