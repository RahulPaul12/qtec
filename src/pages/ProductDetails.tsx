import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { useUpdateCart } from "../hooks/useUpdateCart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function ProductDetails (){
      const { state } = useLocation();
      const product = state;
      const { id, name, image, price, description } = product || {};
      const [sidebarOpen, setSidebarOpen] = useState(false)
      const {cart,updateCart,total } = useUpdateCart();
    return (
        <>
        <Navbar setSidebarOpen={setSidebarOpen}/>
        <Sidebar isOpen ={sidebarOpen} setSidebarOpen={setSidebarOpen} cartItems={cart} updateCart={updateCart} total={total}/>

        {/* // <!--====================================
        //     Product Details PART START  
        // =====================================--> */}
        <section className="container my-20">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-5 h-full">
                    <img className="h-full rounded-2xl" src={image} alt="" />
                </div>
                <div className="col-span-12 md:col-span-7">
                    <span>Product id: #{id}</span>
                    <h2 className="text-3xl font-bold mb-3">{name}</h2>
                    <p className="text-base mb-2">{description}</p>
                    <h6 className="text-lg font-bold mb-3">Price : ${price}</h6>
                    <button onClick={()=>updateCart(product, 'add')} className="flex justify-center rounded-lg text-center capitalize text-base font-medium py-3 px-3 w-full text-white bg-primary">Add to Cart</button>
                </div>
            </div>
        </section>
        {/* // <!--====================================
        //     Product Details PART END   
        // =====================================--> */}
        </>
    )
}