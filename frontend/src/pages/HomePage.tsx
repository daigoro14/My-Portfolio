import React from 'react'
import TopBar from '../components/TopBar'
import bayPhoto from "../photos/IMG_2935.jpeg"
import style from '../styles/HomePage.module.scss'



export default function HomePage() {



  
  return (
    <div>
        <TopBar/>

        <div className={style.content}>
          <p className={style.header}>Welcome to my portfolio!</p>
          <div className={style.summary}>
            <img className={style.bayPhoto} src={bayPhoto} alt="walk at bay" />
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
