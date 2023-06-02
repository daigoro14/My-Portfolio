import React from 'react'
import TopBar from '../components/TopBar'
import aboutInfo from '../data/aboutInfo'
import style from '../styles/AboutPage.module.scss'

export default function AboutPage() {
  return (
    <div>
        <TopBar page={"about"}/>
        <div className={style.content}>
        {aboutInfo.map((about, index) => (
            <div className={index % 2 === 0 ? style.about1 : style.about2}>
              <span className={style.aboutHeader}>{about.title}</span>
              <div className={style.aboutInfo}>
                <p className={style.aboutDescription}>
                  <img className={style.aboutImg} src={about.img} alt={about.alt}/>
                  {about.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
