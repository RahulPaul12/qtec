export default function Sidebar({isOpen, setSidebarOpen,additems}){
    
      let total =0;
        for(const product of additems){
            total = total+product?.price
        }
 
    

    return (
        // <!--====================================
        //    SIDEBAR CART PART START  
        // =====================================-->
   <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="max-w-96 w-full">
            <div className="h-[calc(100vh-138px)] p-4 thin-scrolling">
                <div className="sidebar-header flex items-center justify-between mb-3.5 w-full">
                    <h2 className="text-[22px] font-medium flex-grow text-center">My Cart</h2>
                    <i onClick={()=>setSidebarOpen(!isOpen)} className="fa-solid fa-circle-xmark text-lg text-red-500 cursor-pointer"></i>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between gap-2 rounded-xl p-3 mb-3 border border-gray-1">
                    <h3 className="capitalize text-sm font-medium">Subtotal</h3>
                    <h4 className="text-sm font-medium">${total}</h4>
                </div>
                <a href="" className="flex justify-center rounded-3xl text-center capitalize text-base font-medium py-3 px-3 w-full text-white bg-primary">Checkout</a>
            </div>
        </div>
    </aside> 
    // <!--====================================
    //        SIDEBAR CART PART START  
    // =====================================-->
    )
}