import { Link } from "react-router";


export default function Navbar ({setSidebarOpen}){
      const handleSidebar = () => {
          setSidebarOpen(open => !open);
      };
    return (
        
    // <!--====================================
    //         HEADER PART START  
    //  =====================================-->
        <header className="header">
            <nav className="container flex justify-between items-center py-4 md:py-5">
                <Link to="/">Qtec Solution</Link>
                <ul className="text-sm font-medium ">
                    <li className="hover:text-primary"><Link to="/">Home</Link></li>
                </ul>
                <button onClick={handleSidebar} className="flex items-center gap-2 font-medium text-sm bg-black/100 px-3 h-8 cursor-pointer rounded-full text-white">
                <i className="fa-solid fa-cart-shopping text-xs "></i>
                $0.00
                </button>
            </nav>
        </header>
    // <!--====================================
    //             HEADER PART START  
    // =====================================-->
    )
}