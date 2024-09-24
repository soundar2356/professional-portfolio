import React from 'react';
import { useState } from 'react';
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  }


  return (
<section className="qualification__section">
  <h2 className="section__title">Qualification</h2>
  <span className="section__subtitle">My Personal Journey</span>


    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :
           "qualification__button  button--flex"} onClick={() => toggleTab(1) }>
          <i className="uil uil-graduation-cap qualification__icon"></i>Education
        </div>

        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :
           "qualification__button  button--flex"} onClick={()=>toggleTab(2)}>
          <i className="uil uil-briefcase-alt qualification__icon"></i>Courses
        </div>
      </div>
    
      <div className="qualification__sections">
        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
        >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.E-Computer Science Engineering</h3>
                <span className="qualification__subtitle">Fatima Michael College Of Engg And Tech</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022-2024</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                  <div></div>
                  <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">B.E-Computer Science Engineering</h3>
                    <span className="qualification__subtitle">Fatima Michael College Of Engg And Tech</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt">2017-2021</i>
                    </div>
                  </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Education</h3>
                <span className="qualification__subtitle">M. N. U Jayaraj Nadar <br/>Hr. Sec. School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2017</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                  <div></div>
                  <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Secondary Education</h3>
                    <span className="qualification__subtitle">M. N. U Jayaraj Nadar <br/>Hr. Sec. School</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt">2015</i>
                    </div>
                  </div>
            </div>

        </div>

        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
        >

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Development</h3>
                <span className="qualification__subtitle">S.R.V institution</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                  <div></div>
                  <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Mastering Java</h3>
                    <span className="qualification__subtitle">Udemy</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt">2023</i>
                    </div>
                  </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MySQL Mastery</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2023</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          

        </div>

      </div>
    </div>
</section>
  )
}

export default Qualification
