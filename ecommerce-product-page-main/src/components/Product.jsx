import ProductContent from "./ProductContent.jsx";

export default function Product() {
    return (
        <div className="product-container">
            <div className="product">
                <div className="Product__gallery"></div>
                <ProductContent />
            </div>
        </div>
    )
}