"use client";
import logo from "public/logo.png"
import Image from "next/image"
import Link from "next/link"
import {ShoppingCart} from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"




const Header = () => {
  const cartValue = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Link href={"/"}>
        <Image src={logo} alt="dine market logo" className="w-40 "  />
        </Link>
        <ul className="flex gap-x-10">
            
            <li className="text-lg"><Link href={"/category/female"}>Female</Link></li>
            <li className="text-lg"><Link href={"/category/male"}>Male</Link></li>
            <li className="text-lg"><Link href={"/category/kids"}>Kids</Link></li>
            <li className="text-lg"><Link href={"/AllProducts"}>All products</Link></li>
        </ul>
        <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center relative"> 
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
          </span> 
            <ShoppingCart className="h-6 w-6"/>
        </div>
    </div>
  )
}

export default Header