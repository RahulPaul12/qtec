export default function CheckoutModal ({modalOpen, setModalOpen}){
    return (
    <section className={`modal ${modalOpen? 'active':''}`}>
        <div className="max-w-[647px] w-full bg-white p-4 scale-0 transition-all duration-500 rounded-b-none sm:rounded-b-2xl rounded-t-2xl absolute bottom-0 sm:bottom-auto sm:top-20">
            <div className="items-start border-none flex justify-end">
                <button onClick={()=>setModalOpen(false)} className="text-red-500 text-base"><i className="fa-solid fa-circle-xmark"></i></button>
            </div>
            <div className="modal-body">
                <div className="rounded-2xl bg-white">
                    <h2 className="capitalize mb-4 ltr:text-left rtl:text-right text-base font-medium leading-6 text-heading">Delivery Address</h2>
                    <form>
                        <div className="grid grid-cols-12 gap-6 mb-8">
                            <div className="col-span-12 sm:col-span-6">
                                <label className="text-xs capitalize mb-1 text-heading">Name</label>
                                <input type="text" value="Rahul" className="w-full h-12 text-sm rounded-lg border px-4 text-heading border-[#D9DBE9]"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <label className="text-xs capitalize mb-1 text-heading">Email</label>
                                <input type="email" value="rahulpaul9914@gmail.com" className="w-full h-12 text-sm rounded-lg border px-4 text-heading border-[#D9DBE9]"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <label className="text-xs capitalize mb-1 text-heading">Address</label>
                                <input type="text" value="mirpur, dhaka" className="w-full h-12 text-sm rounded-lg border px-4 text-heading border-[#D9DBE9]"/>
                            </div>
                            <div className="col-span-12 sm:col-span-6">
                                <label className="text-xs capitalize mb-1 text-heading">mobile number</label>
                                <input type="text" value="12079303930" className="w-full h-12 text-sm rounded-lg border px-4 text-heading border-[#D9DBE9]"/>
                            </div>
                        </div>
                        <button className="flex items-center justify-center gap-3 rounded-3xl text-base py-3 px-3 font-medium w-full text-white bg-primary">
                            <span>Submit</span>
                         </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}