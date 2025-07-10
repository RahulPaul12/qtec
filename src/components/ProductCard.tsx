export default function ProductCard (props:any){
    const { id,name,image,price,description } = props.product;
    return (
        <div className="product-card-grid">
                <img className="product-card-grid-image" src={`${image}`} alt="product"/>
                <div className="product-card-grid-content-group">
                    <div className="product-card-grid-header-group">
                        <h3 className="product-card-grid-title">{name}</h3>
                    </div>
                    <p className="product-card-grid-describe char-limit">Our CHICK and CRISP™ is loaded choppe dlettuce layer with creamy cheese</p>
                    <div className="product-card-grid-footer-group">
                        <div className="product-card-grid-price-group">
                            <h4 className="product-card-grid-price-current">${price}</h4>
                        </div>
                        <button onClick={()=>props.handleAddBtn(props.product)} className="product-card-grid-cart-btn add-btn group" data-modal="#variation" >
                            <i className="fa-solid fa-cart-shopping text-xs text-primary group-hover:text-white"></i>
                            <span className="text-xs text-primary transition group-hover:text-white">add</span>
                        </button>
                    </div>
                </div>
        </div>
    )
}