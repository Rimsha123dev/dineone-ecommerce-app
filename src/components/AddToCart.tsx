"use client";
import { Button } from "./ui/button"
import  { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"

const AddToCart = () => {
  const  dispatch = useDispatch();
  const addItem =() =>{
    dispatch(cartActions.addToCart({quantity:1}));
  }
  return (
    <div>  <Button onClick={addItem} className="bg-black h-12 px-8 mt-4 text-white font-semibold">Add To Cart</Button></div>
  )
}

export default AddToCart