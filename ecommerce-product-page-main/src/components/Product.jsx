import ProductContent from "./ProductContent.jsx";
import ProductGallery from "./ProductGallery.jsx";

export default function Product() {
    return (
        <div className="product-container">
            <div className="product">
                <ProductGallery />
                <ProductContent />
            </div>
        </div>
    )
}