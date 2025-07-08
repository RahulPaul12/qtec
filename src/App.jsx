import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
     <Navbar setSidebarOpen={setSidebarOpen}/>
     <Sidebar isOpen ={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </>
  )
}

export default App;
