import React from 'react'
import Project from './Project/Project'
import style from "./work.module.css"
const Work = () => {
    let project = [{
name: "Fitmeals",
img: "/project_img/fitmeals.png",
des:'This is a frontend clone of Fitmeals.in . Which is a healthy diet meal delivery start-up that provide home delivery in hyderabad only you can purchase your food according to your diet and also you can book an Appointment with a nutritionist. We used html, css, javascript to bulid this project.',
live_link: "https://grand-longma-97f1d2.netlify.app/index.html",
github_link: "https://github.com/sauravsamui/Fitmeal-clone"
    },
{
name: "Reliance Digital",
img: "/project_img/reliance.png",
des:'This is a frontend clone of Reliance Digital. Which is  a Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries. We used html, css, javascript to bulid to this project.',
live_link: "https://reliancedigitala.netlify.app/",
github_link: "https://github.com/dilipsingh076/Reliance-digital-clone-unit-3"
},{
    name:'Time Tracking System',
    img:"/project_img/timetrack.png",
    des:'TrackingTime is an intuitive Time Tracking Software. Simplify Timesheets. Get accurate clients, projects and employee This project is developed by team of 5 during construct week of Masai School.We used html,css and javascrispt in this project',
    live_link:"https://ce652.netlify.app/",
    github_link:"https://github.com/rajputyash006/habitual-hope-140"
},
{
    name:'Intern Theory',
    img:"/project_img/interntheory.png",
    des:'This is a frontend clone of Intern theory. This is for upskilling yourself by enrolling in Online courses of intern theory. Find internships for students in different cities in India. We used html, css, javascript and React to bulid this project.',
    line_link:"https://interandjob.netlify.app//",
    github_link:"https://github.com/udhai-20/Intern-Theory_Clone"
},
{
    name:'WantFlix',
    img:"../project_img/wantflix.png",
    des:'Wantflix TV website is a video streaming service from initiated by Apple TV+. It features exclusive and Original shows and movies.',
    line_link:"https://wantflix-shows.netlify.app/",
    github_link:"https://github.com/A-Hore/Wantflix-TV"
}
]
  return (
    <div className={style.wrapper} id="work"> 
    <h1 className={style.heading}>Projects
        <br />
    </h1>
    

        <div className={style.container}>
            <Project project={project[0]}/>
             <Project project={project[1]}/> 
                 <Project project={project[2]}/>
             <Project project={project[3]}/> 
             <Project project={project[4]}/> 
        </div>
    </div>
  )
}

export default Work