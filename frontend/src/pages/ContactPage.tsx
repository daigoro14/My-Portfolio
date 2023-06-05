import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import style from '../styles/ContactPage.module.scss'
import emailjs from '@emailjs/browser'

export default function ContactPage() {

  const serviceID: any = process.env.REACT_APP_SERVICE_ID
  const templateKey: any = process.env.REACT_APP_TEMPLATE_ID
  const publicKey: any = process.env.REACT_APP_PUBLIC_KEY



  const [showForm, setShowForm] = useState(false)

  function sendEmail(e: any) {
    e.preventDefault()

    console.log(e.target.name)
    emailjs.sendForm(serviceID, templateKey, e.target, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  const array = [
    {item:           
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"/>
        </svg>
        <a href='https://www.linkedin.com/in/daigoro-miguel-persson-5839ba224/'  rel="noreferrer" target="_blank">Linkedin</a>
      </>
    },
    {item:           
      <>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" version="1.1">
          <rect id="icon-bound"/>
          <path d="M11.5,0h-7C3.675,0,3,0.675,3,1.5v13C3,15.325,3.675,16,4.5,16h7c0.825,0,1.5-0.675,1.5-1.5v-13C13,0.675,12.325,0,11.5,0z M8,15c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S8.553,15,8,15z M12,12H4V2h8V12z"/>
        </svg>
        <a href="tel:+46707547403"  rel="noreferrer" target="_blank">+46 70 754 74 03</a>
      </>
    },
    {item:           
      <>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -2.5 20 20" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
        {/* <a href="mailto: daigoropersson@gmail.com"  rel="noreferrer" target="_blank">daigoropersson@gmail.com</a> */}
        <span onClick={() => {showForm ? setShowForm(false) : setShowForm(true)}}>daigoropersson@gmail.com</span>

      </>
    }
  ]


  return (
    <div className={style.content}>
        <TopBar page={"contact"}/>
        <div className={style.links}>

          {array.map((item, index) => (
            <div key={index} className={`${style.contactOption} ${index === 0 ? style.contact1 : index === 1 ? style.contact2 : style.contact3}`}>
            {item.item}
            </div>
          ))}
        </div>
        <form onSubmit={sendEmail} className={`${showForm ? style.showForm : style.hideForm} ${style.contactForm}`}>
          <span>Email right away!</span>
          <label htmlFor="name">Name <input name="name" type="name" placeholder='Name'/></label>

          <label htmlFor="email">Email <input name="email" type="email" placeholder='example@email.com' /></label>

          <label className={style.msgTextarea} htmlFor="message">Message  <textarea name="message" placeholder='Message'/></label>

          <button className={style.sendButton} type="submit">Send</button>
        </form>
    </div>
  )
}
