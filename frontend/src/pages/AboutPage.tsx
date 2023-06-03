import React from 'react'
import TopBar from '../components/TopBar'
import aboutInfo from '../data/aboutInfo'
import style from '../styles/AboutPage.module.scss'

export default function AboutPage() {
  return (
    <div>
        <TopBar page={"about"}/>
        <div className={style.content}>
          <p className={style.aboutIntro}>
              Hi! My name is <u>Daigoro Miguel Persson.</u> Im 24 years old and I'm born and raised in Stockholm, Sweden. 
              <br/><br/>
              As a Full Stack-Developer I would say I enjoy both the front- and backend. I see it all as one which I believe has been beneficial for since I haven't been limited to just one of the stacks. 
                        </p>
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
