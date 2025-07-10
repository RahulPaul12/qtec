import { useEffect, useState } from "react";
import ProductCard from "../src/components/ProductCard";
import Sidebar from "../src/components/Sidebar";
import Navbar from "../src/components/Navbar";
type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
    description: string
};
export default function Home (){
        const [sidebarOpen, setSidebarOpen] = useState(false)
        const [products, setProduct] = useState([]);
        const [add, setAdd] = useState<Product[]>([]);
    
         useEffect(() => {
             fetch('./products.json')
             .then(res=>res.json())
             .then(data=>setProduct(data));
         },[]);

       const handleAddBtn = (product: Product) => { 
        const newAdd = [...add, product];
        setAdd(newAdd);
        
    };

    return (
        <>
             <Navbar setSidebarOpen={setSidebarOpen}/>
            <Sidebar isOpen ={sidebarOpen} setSidebarOpen={setSidebarOpen} additems={add}/>
        <section className="container">
            <div className="grid grid-cols-4 gap-6 mt-12">
            {
                products.map((product, index) => <ProductCard key={index} product={product} handleAddBtn={handleAddBtn} />)
            }
        </div>
        </section>
        </>
    )
}