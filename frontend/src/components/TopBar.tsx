import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/TopBar.module.scss'

export default function TopBar(props: any) {

  const page = props.page
  const [navBar, setNavBar] = useState(style.show)
  const [menuButtons, setMenuButtons] = useState(false)

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavBar(style.show)
      console.log('visible')
    } else {
      setNavBar(style.hide)
      setMenuButtons(false)
      console.log('invisble')
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div className={`${style.topBar} ${navBar}`}>
        <Link to="/" className={style.homeButton}>Daigoro</Link>

        <svg 
          className={style.menuBurger}
          width="50px" height="50px" 
          onClick={() => {menuButtons ? setMenuButtons(false) : setMenuButtons(true)}}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
          <path fillRule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#ffffff"/>
        </svg>

        <div className={`${style.navButtons} ${menuButtons ? style.showMenu : style.hideMenu}`}>
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
