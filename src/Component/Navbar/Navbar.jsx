import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = ({ scroller }) => {
 
  return (
    <>
      <div className={style.navbar} >
          <div className={style.logo}>
           <p>
             B
            </p>
          </div>
        <div>
          <div className={style.navlinks}>
            <div className={style.navlink}>
              <p>00.</p>
              <a className={style.link} href="#about">
                AboutMe
              </a>
            </div>
            <div className={style.navlink}>
              <p>01.</p>
              <a className={style.link} href="#work">
                Project
              </a>
            </div>
            <div className={style.navlink}>
              <p>02.</p>
              <a className={style.link} href="#contact">
                Contact
              </a>
            </div>
            <div className={style.navlink}>
              <p>03.</p>
              <a
                className={style.link}
                href="https://drive.google.com/file/d/1YzlemEw2svGBffjxfJYGj5sLBMj8lm0F/view?usp=sharing"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
