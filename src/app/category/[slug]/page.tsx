
import ProductCard from "@/components/ProductCard"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"

const getProductsByCategory = (category:string) =>{
  return  Products.filter((product)=> product.category===category);
};



export default function Page({ params }: { params: { slug: string } }) {
const result = getProductsByCategory(params.slug);
return(
<div className="grid grid-cols-3  ">
    {
        result.length>0 ? result.map((product)=> (
            <ProductCard key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData}  category={product.category} id={product.id} /> 
        

  )):    ( <p> No Product Found</p>
        )}

</div> 

  




 ) }