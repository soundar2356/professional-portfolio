import React from 'react';

const Info = () => {
  return (
  <div className="about__info grid">
    <div className="about__box">
      <i class='bx bx-award about__icon'></i>

      <h3 className="about__title">Education</h3>
      <span className="about__subtitle">Master Of Engineering</span>
    </div>

    <div className="about__box">
    <i class='bx bx-briefcase-alt about__icon'></i>

      <h3 className="about__title">Completed</h3>
      <span className="about__subtitle">4+ Projects</span>
    </div>

    <div className="about__box">
    <i class='bx bx-expand-horizontal about__icon'></i>
      <h3 className="about__title">Courses</h3>
      <span className="about__subtitle">2+ Online Cources</span>
    </div>
  </div>
  )
}

export default Info
