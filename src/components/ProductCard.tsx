"use client";
import Image, { StaticImageData } from "next/image"
import Fp1 from "@/asset/Images/fp1.png"
import Fp2 from "@/asset/Images/fp2.png"
import Fp3 from "@/asset/Images/fp3.png"
import AddToCart from "./AddToCart"
import Link  from "next/link"



function ProductCard (props:{
  title:string,price:number,img:string|StaticImageData, category:string, id:number;})  {
  return (
    <Link href={`/AllProducts/${props.id}`}>
    <div className="py-4 ">
          <Image src={props.img} alt="product" className="h-96 rounded-md object-cover"/>
      <h3 className="font-extrabold text-lg mt-3">{props.title} </h3>
      <p className="font-bold text-lg"> ${props.price}</p>
      <p className="font-bold text-lg"> Category <span className="text-base font-normal capitalize">
        {props.category}</span></p>
        <AddToCart/> 
    </div>
    </Link>
  )
}

export default ProductCard