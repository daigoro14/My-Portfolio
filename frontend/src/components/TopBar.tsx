import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/TopBar.module.scss'

export default function TopBar() {
  return (
    <div className={style.topBar}>
        <Link to="/" className={style.homeButton}>Daigoro</Link>

        <div className={style.navButtons}>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}
