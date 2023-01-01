import React from "react";
import style from "./about.module.css";


const About = () => {

  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch("Bhawna-Singh-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Bhawna-Singh-Resume.pdf";
        alink.click();
      });
    });
    window.open(
      "https://drive.google.com/file/d/1YzlemEw2svGBffjxfJYGj5sLBMj8lm0F/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className={style.flexbox}>
    <div className={style.container} id="about">
      <div className={style.intro}>
        <p className={style.introp}> Hi, my name is</p>
        <h1 className={style.name}> Bhawna Singh</h1>
        <h1 className={style.introhead}> I build things for the web.</h1>
        <p className={style.tagline}>
          I'm a full stack developer with a passion for building things that
          people love.
        </p>
        
      </div>
      
    </div>
    <div className={style.canvas}>
              <img src="/img/profile.png" className={style.profileimg} alt="" />
             <button className={style.dbut} onClick={handleDownload} >Download CV</button>
             
       </div>
    </div>
  );
};

export default About;
