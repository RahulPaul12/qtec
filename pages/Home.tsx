import { useEffect, useState } from "react";
import ProductCard from "../src/components/ProductCard";
import Sidebar from "../src/components/Sidebar";
import Navbar from "../src/components/Navbar";
import ProductDetails from "../src/components/ProductDetails";
import { useUpdateCart } from "../src/hooks/useUpdateCart";

export default function Home (){
        const [sidebarOpen, setSidebarOpen] = useState(false)
        const [products, setProduct] = useState([]);
    
         useEffect(() => {
             fetch('./products.json')
             .then(res=>res.json())
             .then(data=>setProduct(data));
         },[]);

        const {
             cart,
             updateCart,
             total
            } = useUpdateCart();

    return (
        <>
             <Navbar setSidebarOpen={setSidebarOpen}/>
             <Sidebar isOpen ={sidebarOpen} setSidebarOpen={setSidebarOpen} cartItems={cart} updateCart={updateCart} total={total}/>
            <section className="container">
                <div className="grid grid-cols-4 gap-6 mt-12">
                {
                    products.map((product, index) => 
                    <ProductCard key={index} product={product} handleAddBtn={updateCart} />)
                }
                </div>
            </section>
        </>
    )
}