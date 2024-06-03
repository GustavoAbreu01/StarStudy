import Slider from "react-slick";
import "./ThemesBanners.css"
import { useRef } from "react";
import { DraggableCore } from "react-draggable";
import { useEffect } from "react";

const ThemesBanners = () => {

    const sliderRef = useRef(null);

    const handleDrag = (e, drag) => {
        const distanceThreshold = 100;
        if (drag.deltaX < -distanceThreshold) {
            sliderRef.current.slickNext();
        } else if (drag.deltaX > distanceThreshold) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 5000,
        autoplay: true,
        className: 'horizontal-carousel',
    };

    const tags = [
        "Lógica de Programação",
        "Linguagem de Programação C",
        "Bibliotecas básicas em C",
        "Declaração de variáveis",
        "Comandos de Entrada e Saída",
        "Condicional",
        "Laços de Repetição",
        "Conhecendo o Arduino",
        "Componentes básicos do Arduino",
        "Simuladores de robótica."
    ]

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [tags]);

    return (
        <DraggableCore axis="x" onDrag={handleDrag}>
            <Slider ref={sliderRef}{...settings}>
                {tags && tags.map((tag) => (
                    <div className="tags__search">
                        <span className="">{tag}</span>
                    </div>
                ))}
            </Slider>
        </DraggableCore>
    )
}

export default ThemesBanners;