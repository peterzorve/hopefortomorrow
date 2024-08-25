// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
import Title from '../Title/Title'
import SkillsComponent from './SkillsComponent'
import Home1 from './Home1'
import Hero from './Hero'
import Gallery from '../Gallery/Gallery'



const HomeScreen = () => {
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false)
  const galleryTitle = isSecondComponentVisible ? "Hide gallery" :  "Gallery" 
  const handleButtonClick = () => { 
    setIsSecondComponentVisible(!isSecondComponentVisible); 
  };
  return (
    <div>
      <Title subTitle="" title="hope for tomorrow foundation"/>
      {/* <Title subTitle="Building the next generation of students" title=""/> */}
        <Home1/>
        {/* <Home1/> */}
        <Hero onButtonClick={handleButtonClick} galleryTitle={galleryTitle}/>
        {isSecondComponentVisible && <Gallery/>}
        
        <div className="container">
            <Title title="Programming Skills"/>
            <SkillsComponent/>  
      </div>
    </div>

  )
}

export default HomeScreen