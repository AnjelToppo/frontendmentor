export default function ProductContent() {
    return (
        <div className="product__content">
            <div className="product__header">
                <span className="company">Sneaker Company</span>
                <h1 className="product__name">Fall Limited Edition Sneakers</h1>
            </div>
            <p className="product__description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="product__price-container">
                <div className="product__prices">
                    <span className="product__current-price">$125.00</span>
                    <span className="product__actual-price">$250.00</span>
                </div>
                <span className="product__discount">50%</span>
            </div>
            <div className="cta">
                <div className="actions__container">
                    <button className="btn__decrease-quantity"><img src="/images/icon-minus.svg" alt="decrease product quantity"/></button>
                    <span className="product__add-quantity">0</span>
                    <button className="btn__decrease-quantity"><img src="/images/icon-plus.svg" alt="increase product quantity"/></button>
                </div>
                <button className="btn__add-cart"><span></span>Add to cart</button>
            </div>
        </div>
    )
}