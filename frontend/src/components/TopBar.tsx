import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/TopBar.module.scss'

export default function TopBar(props: any) {

  const page = props.page
  const [navBar, setNavBar] = useState(style.show)

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavBar(style.show)
      console.log('visible')
    } else {
      setNavBar(style.hide)
      console.log('invisble')
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div className={`${style.topBar} ${navBar}`}>
        <Link to="/" className={style.homeButton}>Daigoro</Link>

        <div className={style.navButtons}>

            <Link to="/projects">
              Projects
              <div className={`${style.underLine} ${page === "project" ? style.currPage : ""}`}></div>
            </Link>
            <Link to="/about">
              About
              <div className={`${style.underLine} ${page === "about" ? style.currPage : ""}`}></div>
            </Link>
            <Link to="/contact">
              Contact
              <div className={`${style.underLine} ${page === "contact" ? style.currPage : ""}`}></div>
            </Link>
        </div>
    </div>
  )
}
