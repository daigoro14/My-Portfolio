import React, { useState } from 'react'
import apple from "../photos/projectImages/apple.webp"
import avocado from "../photos/projectImages/avocado.png"
import style from "../styles/ImageSlider.module.scss"


export default function ImageSlider() {

    const slides = [
        {url: apple},
        {url: avocado}
    ]

    const [index, setIndex] = useState(0);

    console.log(slides.length)



  return (
    <div>
    <div className={style.slideshow}>
        <div className={style.slideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {slides
            .map((item, index) => {
                return (
                    <img className={style.slide} key={index} src={item.url}/>
                    // <div className="slide" key={index}>
                    //     <div className="slideContent" >
                    //         <b><p>First Language:</p></b>
                    //         <h4>{item.firstLanguage}</h4><br/>
                    //         <><b><p>{item.languageName}: </p></b></>
                    //         <h4 className="secondLanguageNote">{item.secondLanguage}</h4>
                    //     </div>
                    // </div>
                )
            })
            }
        </div>

        <div className={style.remote}>
            <button className={style.remoteLeft} onClick={() => {setIndex((prevIndex) => prevIndex - 1 === -1 ? slides.length - 1 : prevIndex - 1);}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </button>

            <div className={style.slideshowDots}>
                {slides.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`${style.slideshowDot} ${index === idx ? style.active : ""}`}
                    onClick={() => {
                        setIndex(idx);
                      }}>
                </div>
                ))}
            </div>

            <button className={style.remoteRight} onClick={() => {setIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </button>
        </div>
    </div>
    </div>
  )
}
