
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard"
import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from "next/image"

const getProductsDetail = (id:number | string) =>{
  return  Products.filter((product)=> product.id==id);
};

const sizes = ["xs","sm","md","lg","xl"]


export default function Page({ params }: { params: { id: string } }) {
const result = getProductsDetail(params.id );
return(
<div className="grid grid-cols-3  ">
     {
         result.map((product)=> (
          <div key={product.id} className="flex justify-between gap-6">
            {/* left side */}
            <div>
              <Image src={product.image} alt={product.name}/>
              </div>
              {/* right side */}
              <div className="font-bold ">
                <h1 className="text text-2xl">{product.name}</h1>
                <div>
               <h2 className="text-xs font-semibold mt-6">SELECT SIZE</h2>
    
            {/* sizes */}
</div>
<div className="flex gap-x-3">
               {sizes.map((item) => {
                return(
               <div  key={item} className="hover:shadow-xl h-6 w-6 border rounded-full mt-2 duration-300 flex justify-center items-center">
                  <span className="text-[10px] font-semibold text-center text-gray-400">XS
                  {item}</span>
                  
               </div>
               );
})} 
  
                </div>
                {/* Quantity */}
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-[10px] font-semibold">Quantity</h3>
                   <Quantity/>
                </div>

            </div>
        

</div> 

  




      ),)}
      </div>
);
}
