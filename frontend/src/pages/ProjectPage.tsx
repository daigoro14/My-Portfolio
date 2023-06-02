import React, { useEffect, useState } from 'react'
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
              {showSlide == index ? (
                <>
                  <button className={style.showHideBtn} onClick={() => {setShowSlide(null)}}>Show less...</button>
                  <ImageSlider slides={project.slides}/>
                </>
              ):(
                <button className={style.showHideBtn} onClick={() => {setShowSlide(index)}}>Show more...</button>
              )}
            </div>
          ))}
          <div>
            <p>These are some of many projects I've worked on. .</p>
          </div>
        </div>
    </div>
  )
}
