export default function ProductDetails (props){
    const { id,name,image,price,description } = props.product;
    return (
        // <!--====================================
        //     Product Details PART START  
        // =====================================-->
        <section className="container">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-5">
                    <img src={image} alt="" />
                </div>
                <div className="col-span-7">
                    <span>Product id: #{id}</span>
                    <h2 className="text-3xl font-bold mb-3">{name}</h2>
                    <p className="text-base mb-2">{description}</p>
                    <h6 className="text-lg font-bold mb-3">${price}</h6>
                    <a href="" className="flex justify-center rounded-lg text-center capitalize text-base font-medium py-3 px-3 w-full text-white bg-primary">Add to Cart</a>
                </div>
            </div>
        </section>
        // <!--====================================
        //     Product Details PART END   
        // =====================================-->
    )
}