import React, { useState } from 'react'
import style from "../styles/ImageSlider.module.scss"



export default function ImageSlider(props: any) {

    const slides = props.slides

    const [index, setIndex] = useState(0);

  return (
    <div className={style.slideshowRemotes}>
        {slides.length > 1 && (
        <svg 
            className={style.remote} 
            onClick={() => {setIndex((prevIndex) => prevIndex - 1 === -1 ? slides.length - 1 : prevIndex - 1);}} 
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4.5 0 20 20" version="1.1"
        >
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -6679.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" id="arrow_left-[#334]"></path>
                    </g>
                </g>
            </g>
        </svg>
        )}
        <div className={style.slideshow}>
            <div className={style.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {slides
                .map((slide: string, idx: Number) => {
                    return (
                        <div className={`${style.slide} ${index === idx ? style.activeSlide : ""}`}>
                            <img
                                className={style.slideshowImg}
                                key={index}
                                src={slide}
                            />
                        </div>
                    )
                })
                }
            </div>
            <div className={style.slideshowDots}>
                {slides.length > 1 && slides.map((_: any, idx: any) => (
                <div
                    key={idx}
                    className={`${style.slideshowDot} ${index === idx ? style.activeDot : ""}`}
                    onClick={() => {
                        setIndex(idx);
                        }}>
                </div>
                ))}
            </div>
        </div>
        {slides.length > 1 && (
        <svg 
            className={style.remote} 
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4.5 0 20 20" version="1.1" 
            onClick={() => {setIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);}}
        >
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-425.000000, -6679.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M370.39,6519 L369,6520.406 L377.261,6529.013 L376.38,6529.931 L376.385,6529.926 L369.045,6537.573 L370.414,6539 C372.443,6536.887 378.107,6530.986 380,6529.013 C378.594,6527.547 379.965,6528.976 370.39,6519" id="arrow_right-[#333]">
                    </path>
                </g>
            </g>
        </g>
        </svg>
        )}
    </div>
  )
}
