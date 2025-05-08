import {useEffect, useRef, useState} from "react";

const images = ["image-product-1-thumbnail.jpg", "image-product-2-thumbnail.jpg", "image-product-3-thumbnail.jpg", "image-product-4-thumbnail.jpg"];

export default function ProductGallery() {
    const mainImgRef = useRef("0");
    const [currentImg, setCurrentImg] = useState("");

    useEffect(() => {
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
        console.log(currentImg);
    }, [currentImg, mainImgRef]);

    function handleThumbnailClick(thumbnailIndex) {
        mainImgRef.current.dataset.image = thumbnailIndex;
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }

    return (<div ref={mainImgRef} className="product__gallery" data-image="0">
        <div className="product__main-image">
            <img src={`/images/${currentImg}`} alt=""/>
        </div>
        <div className="product__images">
            {images.map((imagePath, imageIndex) => <button key={imagePath} className="thumbnail-container" onClick={() => handleThumbnailClick(imageIndex)}><img
                                                                                             src={`/images/${imagePath}`}
                                                                                             alt="product image"
            />
            </button>)}
        </div>
    </div>)
}