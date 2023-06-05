// Language Notes Images
import lng1 from '../photos/languageNotes/login.png'
import lng2 from '../photos/languageNotes/allNotes.png'
import lng3 from '../photos/languageNotes/mandarin.png'
import lng4 from '../photos/languageNotes/slideshow.png'

// Ploteye Image
import ploteyeImg from '../photos/Ploteye/ploteye.png'

// Social Media Images
import scl1 from '../photos/socialMedia/createPost.png'
import scl2 from '../photos/socialMedia/editProfile.png'
import scl3 from '../photos/socialMedia/profile.png'
import scl4 from '../photos/socialMedia/signup.png'
import scl5 from '../photos/socialMedia/login.png'

// Chat App Images
import cht1 from '../photos/chatApp/Login.png'
import cht2 from '../photos/chatApp/Chat.png'

// Booking Schedule Images
import book1 from '../photos/bookingSchedule/lightmode.png'
import book2 from '../photos/bookingSchedule/darkmode.png'


const projects = [
    {
        title: "Language notes",
        description: `Hobby project for language learning with a note and slideshow feature where users can add vocabularies and phrases in any language of their choice. The purpose of this project was not only to create a sharp tool for language learning but also to take on challenges that could strengthen my skills as a developer.`,
        tags: "React NodeJS CSS MongoDB",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" data-name="Layer 1"><path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z"/></svg>',
        slides: [
            lng1,
            lng2,
            lng3,
            lng4
        ]
    },
    {
        title: "Ploteye",
        description: `I was an intern at Ploteye where I was assigned to do the server and client for the "Edit profile page" and as expected as a team, I also helped in other areas. I learned a lot there both from the team members but also from the project itself. I got introduced to NextJS and Redux which were new to me at the time.`,
        tags: "React NextJS Redux NodeJS CSS MongoDB",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none"><path d="M147.401 313.003C39.8487 313.003 42.2988 313.003 87.1135 209.526V275.47" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M324.557 227.946C304.429 227.192 195.421 226.265 187.533 234.155C176.154 245.537 148.004 324.113 159.274 339.143C235.863 340.602 293.78 342.161 305.108 337.629C310.954 335.29 315.624 328.565 318.228 322.487C320.29 317.673 341.944 244.299 341.944 242.231" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M155.578 338.466C139.386 332.347 122.408 326.968 106.819 318.962" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M109.285 124.88C83.9951 207.964 197.142 243.153 227.106 159.615C243.349 114.329 188.699 47.6707 132.681 97.7025" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M187.702 157.793C188.738 154.993 189.477 153.351 190.056 150.635" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M164.323 157.307C165.41 155.075 165.59 153.074 166.015 150.55" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        slides: [ 
            ploteyeImg
        ]
    },
    {
        title: "Social Media",
        description: `An assignment given by my University to create a "social media app" where the requirements were for users to signup, login, create and see posts, edit their profile and also inspect other users profile.`,
        tags: "EJS Javascript NodeJS CSS MongoDB",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 455.683 455.683" xml:space="preserve"><g><g><path style="fill:#010002;" d="M383.183,143.241c0-0.129,0.043-0.949,0.043-0.949c-0.022-67.215-54.704-121.896-121.94-121.896    c-46.658,0-87.362,27.309-107.789,68.164c-10.462-8.111-22.434-13.978-35.98-13.978c-33.176,0-60.182,26.985-60.182,60.161    c0,0,0.41,2.934,0.733,5.199C24.159,151.481,0,182.5,0,219.17c0,22.649,8.844,44.004,24.85,60.01    c16.027,16.027,37.361,24.871,60.01,24.871h289.501c44.846,0,81.322-36.455,81.322-81.279    C455.704,181.054,423.693,147.814,383.183,143.241z M374.383,280.064H84.859c-16.243,0-31.536-6.363-43.055-17.861    c-11.476-11.497-17.817-26.791-17.817-43.055c0-29.185,20.773-54.315,49.332-59.794l11.174-2.135l-1.855-12.856l-1.316-9.621    c0-19.975,16.221-36.174,36.196-36.174c11.821,0,22.951,5.781,29.746,15.531l13.59,19.565l7.571-22.563    c13.46-39.906,50.756-66.697,92.819-66.697c54.035,0,97.974,43.918,97.974,97.91l-1.208,22.973l13.525,0.237l2.826-0.086    c31.623,0,57.357,25.712,57.357,57.335C431.718,254.33,406.005,280.064,374.383,280.064z M378.006,392.297v42.991h-84.277v-42.991    c0-8.758,7.161-15.876,15.811-15.876h52.654C370.866,376.421,377.985,383.539,378.006,392.297z M200.824,344.82    c0-16.005,12.986-28.991,28.991-28.991s28.97,12.986,28.97,28.991c0,16.006-12.986,28.991-28.97,28.991    C213.81,373.811,200.824,360.847,200.824,344.82z M306.888,344.82c0-16.005,12.986-28.991,28.991-28.991    c16.006,0,28.991,12.986,28.991,28.991c0,16.006-12.986,28.991-28.991,28.991S306.888,360.847,306.888,344.82z M94.804,344.82    c0-16.005,12.986-28.991,28.991-28.991s28.991,12.986,28.991,28.991c0,16.006-12.986,28.991-28.991,28.991    S94.804,360.847,94.804,344.82z M271.964,392.297v42.991h-84.234v-42.991c0-8.758,7.097-15.876,15.833-15.876h52.568    C264.868,376.421,271.943,383.539,271.964,392.297z M165.944,392.297v42.991H81.667v-42.991c0-8.758,7.162-15.876,15.811-15.876    h52.654C158.783,376.421,165.944,383.539,165.944,392.297z"/></g></svg>',
        slides: [
            scl1,
            scl2,
            scl3,
            scl4,
            scl5
        ]
    },
    {
        title: "Chat app",
        description: `Yet another assignment given by my University where the main focus was to create a "chat app" using Typescript and Docker Compose.`,
        tags: "React Typescript NodeJS CSS MongoDB Docker",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="svg5" version="1.1"><defs id="defs2"/><g id="layer1" transform="translate(-396,-292)"><path d="m 420,309.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453477" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 417,309.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453475" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 414,309.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453473" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 410,300.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453457" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 407,300.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453455" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 404,300.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" id="path453453" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/><path d="m 400.05859,294.01367 c -1.09347,0 -2.05859,0.87774 -2.05859,2 v 10 c 0,1.12227 0.96512,2 2.05859,2 H 402 v 3 a 1.0001,1.0001 0 0 0 1.70703,0.70703 l 3.70703,-3.70703 H 408 v 7 c 0,1.122 0.96512,2 2.05859,2 h 4.88086 l 3.70703,3.70703 a 1.0001,1.0001 0 0 0 1.70704,-0.70703 v -3 h 3.58789 c 1.09347,0 2.05859,-0.87802 2.05859,-2 v -10 c 0,-1.12198 -0.96512,-2 -2.05859,-2 H 416 v -7 c 0,-1.12226 -0.96512,-2 -2.05859,-2 z m 0,2 h 13.88282 c 0.0399,0 0.0539,0.004 0.0586,0.006 v 9.98828 c -0.005,0.002 -0.0187,0.006 -0.0586,0.006 H 407 a 1.0001,1.0001 0 0 0 -0.70703,0.29297 L 404,308.59961 v -1.58594 a 1.0001,1.0001 0 0 0 -1,-1 h -2.94141 c -0.0399,0 -0.0539,-0.004 -0.0586,-0.006 v -9.98828 c 0.005,-0.002 0.0187,-0.006 0.0586,-0.006 z m 15.94141,9 h 7.94141 c 0.0399,0 0.0539,0.004 0.0586,0.006 v 9.98828 c -0.005,0.002 -0.0187,0.006 -0.0586,0.006 h -4.58789 a 1.0001,1.0001 0 0 0 -1,1 v 1.58594 l -2.29297,-2.29297 a 1.0001,1.0001 0 0 0 -0.70703,-0.29297 h -5.29493 c -0.0399,0 -0.0539,-0.004 -0.0586,-0.006 v -6.99414 h 3.94141 c 1.09347,0 2.05859,-0.87773 2.05859,-2 z" id="path453429" style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/></g></svg>',
        slides: [
            cht1,
            cht2
        ]
    },
    {
        title: "Booking schedule",
        description: "This was my thesis project at University. It's a start of a booking schedule were customers to businesses can book a time for their services. Users were given the opportunity to switch between light- and darkmode. The main purpose of this project was to migrate from CSS to Sass and study the process in my thesis.",
        tags: "React CSS Sass",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve"><g><rect x="119.256" y="222.607" class="st0" width="50.881" height="50.885"/><rect x="341.863" y="222.607" class="st0" width="50.881" height="50.885"/><rect x="267.662" y="222.607" class="st0" width="50.881" height="50.885"/><rect x="119.256" y="302.11" class="st0" width="50.881" height="50.885"/><rect x="267.662" y="302.11" class="st0" width="50.881" height="50.885"/><rect x="193.46" y="302.11" class="st0" width="50.881" height="50.885"/><rect x="341.863" y="381.612" class="st0" width="50.881" height="50.885"/><rect x="267.662" y="381.612" class="st0" width="50.881" height="50.885"/><rect x="193.46" y="381.612" class="st0" width="50.881" height="50.885"/><path class="st0" d="M439.277,55.046h-41.376v39.67c0,14.802-12.195,26.84-27.183,26.84h-54.025   c-14.988,0-27.182-12.038-27.182-26.84v-39.67h-67.094v39.297c0,15.008-12.329,27.213-27.484,27.213h-53.424   c-15.155,0-27.484-12.205-27.484-27.213V55.046H72.649c-26.906,0-48.796,21.692-48.796,48.354v360.246   c0,26.661,21.89,48.354,48.796,48.354h366.628c26.947,0,48.87-21.692,48.87-48.354V103.4   C488.147,76.739,466.224,55.046,439.277,55.046z M453.167,462.707c0,8.56-5.751,14.309-14.311,14.309H73.144   c-8.56,0-14.311-5.749-14.311-14.309V178.089h394.334V462.707z"/><path class="st0" d="M141.525,102.507h53.392c4.521,0,8.199-3.653,8.199-8.144v-73.87c0-11.3-9.27-20.493-20.666-20.493h-28.459   c-11.395,0-20.668,9.192-20.668,20.493v73.87C133.324,98.854,137.002,102.507,141.525,102.507z"/><path class="st0" d="M316.693,102.507h54.025c4.348,0,7.884-3.513,7.884-7.826V20.178C378.602,9.053,369.474,0,358.251,0H329.16   c-11.221,0-20.349,9.053-20.349,20.178v74.503C308.81,98.994,312.347,102.507,316.693,102.507z"/></g></svg>',
        slides: [
            book1,
            book2    
        ]
    },
]

export default projects