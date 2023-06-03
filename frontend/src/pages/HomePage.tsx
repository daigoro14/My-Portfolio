import React from 'react'
import TopBar from '../components/TopBar'
import style from '../styles/HomePage.module.scss'
import portrait from '../photos/Me/selfportrait.png'



export default function HomePage() {



  
  return (
    <div>
        <TopBar/>

        <div className={style.content}>
          <p className={style.header}>Welcome to my portfolio!</p>
          <div className={style.summary}>
            <div className={style.imgDiv}>
              <img className={style.homeImg} src={portrait} alt="self portrait" />
            </div>
            <div className={style.summaryInfo}>
              <p className={style.signature}><u>Daigoro Miguel Persson</u></p>
              <br />
              <p>Full-stack developer</p>
            </div>
          </div>
        </div>
    </div>
  )
}
