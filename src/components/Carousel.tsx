import { type } from "os";
import Image from "next/image";
import React from "react";

type CarouselProps = {  
    images: string[]|[];
};

export default function Carousel( {images}: CarouselProps) {
return(
    
    <div className="grid self-center justify-center p-8 ">

        <div className="carousel carousel-center rounded-box max-w-4xl justify-center">
            {images.map((image, index) => (
                <div className="carousel-item" key={index}>
                    <Image 
                    src={image} 
                    alt={`Event {$index}`}
                    width={300}
                    height={500}
                    />
                </div>
            ))}


</div>

    </div>


)
}
