import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import ImageSlider from '../components/ImageSlider'
import projects from '../data/projectInfo'
import style from "../styles/ProjectPage.module.scss"


export default function ProjectPage() {

  
  const [showSlide, setShowSlide] = useState<Number | null>(null)


  return (
    <div>
        <TopBar page={"project"} />
        <div className={style.content}>
          {projects.map((project, index) => (
            <div className={index % 2 === 0 ? style.project1 : style.project2}>
              <div className={style.projectSvg} dangerouslySetInnerHTML={{ __html: project.svg}}></div>
              <div className={style.projectInfo}>
                <span className={style.projectHeader}>{project.title}</span>
                <p className={style.tags}>stacks: {project.tags}</p>
                <p className={style.projectDescription}>{project.description}</p>
              </div>
              {showSlide === index ? (
                <>
                  <button className={style.showHideBtn} onClick={() => {setShowSlide(null)}}>Show less...</button>
                  <ImageSlider slides={project.slides}/>
                </>
              ):(
                <button className={style.showHideBtn} onClick={() => {setShowSlide(index)}}>Show more...</button>
              )}
            </div>
          ))}
          <div className={style.gitLink}>
            <p>
              These are some of many projects I've worked on. Feel free to checkout my <a href="https://github.com/daigoro14"  rel="noreferrer" target="_blank">
              <u>
                 Github
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>github</title>
                  <rect width="24" height="24" fill="none"/>
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
                </svg>
              </u>
              </a> to see more of these and other projects of mine!

            </p>
          </div>
        </div>
    </div>
  )
}
