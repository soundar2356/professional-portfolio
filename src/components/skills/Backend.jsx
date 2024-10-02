import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">BackEnd Developer</h3>
    <div className="skills__box">
      <div className="skills__group">
       
      <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">Java</h3>
            {/* <span className="skills__level">Intermideate</span> */}
          </div>
        </div>

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">Python</h3>
            {/* <span className="skills__level">basics</span> */}
          </div>
        </div>
{/* 
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name"></h3>
           <span className="skills__level">basics</span> 
          </div>
        </div> */}
      </div>


      <div className="skills__group">
       
      <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">MySQL</h3>
             {/* <span className="skills__level">basics</span>  */}
          </div>
        </div> 

        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">AWS</h3>
             {/* <span className="skills__level">basics</span>  */}
          </div>
        </div>

        {/* <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">node js</h3>
           <span className="skills__level">basics</span> 
          </div>
        </div> */}
      </div>
    </div>
   </div>
  )
}

export default Backend
