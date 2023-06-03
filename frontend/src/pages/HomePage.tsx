import React from 'react'
import TopBar from '../components/TopBar'
import style from '../styles/HomePage.module.scss'



export default function HomePage() {



  
  return (
    <div>
        <TopBar/>

        <div className={style.content}>
          <p className={style.header}>Welcome to my portfolio!</p>
          <div className={style.summary}>
            <div className={style.imgDiv}>
              <img className={style.homeImg} src="https://lh3.googleusercontent.com/pw/AJFCJaXa58XJVRNbeielsGiFrl7A6Nxxz1IDxv6MjSHc7-r1Lgw-fwlX4MCDL3Hvg2VJL_Y-w55WQePjLtEGv79GoGxw10RHv4zOqC1dqMVIehbvuUr8qlbnVLXFCmYsCjB1kWnf0i6fblqZjSpFeG97hvcYC5ZsTbLUYJKatdqqTbkhDzFg-TThyHk7lUD0csOfoE1DJX4CoKipaZN9u7c6YmWef-LKQiM8dtyxXtmaFOxbZz6powR6QJo7ruGnCYDIBeza0YpgCWr-KINJSLsoqFSJvXjz9wDeNfoyo7Rouk8ka8i3cUcF_gEpm6eymnC_DA2uVo-yCz-61jdeC9k4adSl3fcuhYoP8FRiow2_99d0MD6OSlo056cTUaYJx-Ni0gL7ZdCMvJkoxhKMvvqJd65zW_FN43vWH1cLiDRw56dN7o3KBkt7dEmQsVc9ptBfct_PAhMmsZhCE4K21dOu6LXx8jqmUJLNJTdH7csl8x_vqSqUYml-zttOS5CPjucVgK8D3QG4yKRLACdQ4OAToQ4lr0UWL5ecBNJbzWYf1EKyknd1ktvRTnIWP6RdWdCmHdcL--Gm7QQtZ_zWHlGHnxrrYmGuYstMWql-SVbDhIODNHZklTeKxczOjS7MLZ_-CdMb1gcOqkbbLRiBiW2a48glkZI2-xyP29I3kfyMiLEUmE6CmGh5HdxCsEZ8E5tUkPHS9rWN8Qj3Tn8UJ9h1kalZfNNH1q_FsdOFkZOW_k8h2QVnOBeQMZj-6RKRCVVsuqt407qkXNjDA1qvKKMuc3rF30iTl3nM6xlaPtHq29AOZQDUTWXYZf6rN9ad5sYoz5hTEhn4s2ZZVPze7gHPDPxISoxzHU0ToZiMNrxsi1i7zqY_HFxPQ2BJ6yPRYSj3udlmfJs07xD3LWykf0kiJ8sL-thlLzyy6aiwXAB6vjwGLH89eMnClty6P78jGJ0PrZvns8gnyNPpsfiBZIBJ3e6Xa8S8X_FlTcNMXnxlX6NrVPJM6kGRDWDO7J-xHSQxtQ8=w1536-h1536-s-no?authuser=0" alt="walk at bay" />
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
