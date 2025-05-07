import {useEffect, useRef, useState} from "react";

const images = ["image-product-1-thumbnail.jpg", "image-product-2-thumbnail.jpg", "image-product-3-thumbnail.jpg", "image-product-4-thumbnail.jpg"];

export default function ProductGallery() {
    const mainImgRef = useRef(null);
    const [currentImg, setCurrentImg] = useState("");

    useEffect(() => {
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }, [currentImg, mainImgRef]);

    return (<div ref={mainImgRef} className="product__gallery" data-image="0">
            <div className="product__main-image">
                <img src={`/images/${currentImg}`} alt=""/>
            </div>
            <div className="product__images">
                {images.map((imagePath) => <div className="thumbnail-container"><img key={imagePath} src={`/images/${imagePath}`} alt="product image"/></div>)}
            </div>
        </div>)
}