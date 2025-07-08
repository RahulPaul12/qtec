

export default function Navbar ({setSidebarOpen}){
      const handleSidebar = () => {
          setSidebarOpen(prev => !prev);
      };
    return (
    // <!--====================================
    //         HEADER PART START  
    //  =====================================-->
        <header className="header">
            <nav className="container flex justify-between items-center py-4 md:py-5">
                <a href="/home">Qtec Solution</a>
                <ul className="text-sm font-medium ">
                    <li className="hover:text-primary"><a href="/home">Home</a></li>
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