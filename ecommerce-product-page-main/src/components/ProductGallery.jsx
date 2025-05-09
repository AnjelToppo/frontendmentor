import {useContext, useEffect, useRef, useState} from "react";
import {CartsDispatchContext} from "../context/CartsContext.jsx";

const images = ["image-product-1-thumbnail.jpg", "image-product-2-thumbnail.jpg", "image-product-3-thumbnail.jpg", "image-product-4-thumbnail.jpg"];

export default function ProductGallery() {
    const mainImgRef = useRef("0");
    const [currentImg, setCurrentImg] = useState("");
    const dispatch = useContext(CartsDispatchContext);

    useEffect(() => {
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }, [currentImg, mainImgRef]);

    function handleThumbnailClick(thumbnailIndex) {
        mainImgRef.current.dataset.image = thumbnailIndex;
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }

    function handlePrevClick() {
        if (+mainImgRef.current.dataset.image <= 0) return;
        mainImgRef.current.dataset.image = +mainImgRef.current.dataset.image - 1;
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }

    function handleNextClick() {
        if (+mainImgRef.current.dataset.image >= images.length - 1) return;
        console.log(mainImgRef.current.dataset.image, currentImg);
        mainImgRef.current.dataset.image = +mainImgRef.current.dataset.image + 1;
        setCurrentImg(images[+mainImgRef.current.dataset.image]?.replace('-thumbnail', ''));
    }

    return (<div ref={mainImgRef} className="product__gallery" data-image="0">
        <div className="product__main-image">
            <img src={`/images/${currentImg}`} alt="product" onClick={() => dispatch({type: 'open-light-box'})} />
            <div className="move-image">
                <button className="prev-image" onClick={handlePrevClick}><span></span></button>
                <button className="next-image" onClick={handleNextClick}><span></span></button>
            </div>
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