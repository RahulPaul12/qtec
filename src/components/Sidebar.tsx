import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

export default function Sidebar({ isOpen, setSidebarOpen, cartItems, updateCart, total }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="max-w-96 w-full">
        <div className="h-[calc(100vh-138px)] p-4 overflow-auto">
          <div className="sidebar-header flex items-center justify-between mb-3.5 w-full">
            <h2 className="text-[22px] font-medium flex-grow text-center">My Cart</h2>
            <i
              onClick={() => setSidebarOpen(!isOpen)}
              className="fa-solid fa-circle-xmark text-lg text-red-500 cursor-pointer"
            ></i>
          </div>

          <ul>
            {cartItems.map(item => (     
              <li className="flex items-start gap-3 mb-3 pb-3 border-b border-gray-200">
                <img className="w-16 h-16 rounded-lg" src={item.product.image} alt="product" />
                <div className="w-full">
                  <h6 className="text-sm font-bold">{item.product.name}</h6>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold">
                      ${item.product.price * item.quantity}
                    </h3>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateCart(item.product, 'dec')}
                        className="fa fa-minus w-4 h-4 text-xs text-center rounded-full border border-primary text-primary"
                      ></button>
                      <input
                        type="number"
                        readOnly
                        value={item.quantity}
                        className="w-7 text-xs text-center font-semibold"
                      />
                      <button
                        onClick={() => updateCart(item.product, 'inc')}
                        className="fa fa-plus w-4 h-4 text-xs text-center rounded-full border border-primary text-primary"
                      ></button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl mb-3">
            <h3 className="text-sm font-medium">Subtotal</h3>
            <h4 className="text-sm font-medium">${total}</h4>
          </div>
          <button onClick={()=>setModalOpen(true)} className="block text-center w-full py-3 bg-primary text-white rounded-3xl">
            Checkout
          </button>
        </div>
      </div>
    </aside>

    <CheckoutModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>

    </>
  );
}
