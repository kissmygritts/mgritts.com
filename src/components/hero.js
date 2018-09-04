import React from 'react'

const Hero = ({ siteTitle }) => (
  <div
    className = "bg-green mb5 flex justify-center items-center tc"
    style={{
      height: '85vh',
      width: '100%'
    }}
  >

    <div>
      {/* my name */}
      <h1 className = "white lh-title mb0 mt0 pb0 pt0 fw4 avenir f1">
        Hi, I'm Mitchell Gritts
      </h1>
      <h2 className="white lh-title mb0 mt0 pb0 pt0 fw2 avenir f4">
        a wildlife ecologist, data analyst, and web developer in Reno, Nevada
      </h2>
    </div>
    
  </div>
)

export default Hero
