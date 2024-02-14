import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/>design and code React apps</h1>
        <p>Complete courses about the best tool and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="Design system" text="10 sections" image={require('../images/wallpaper.jpg')} />
        <Card title="React for Designers" text="12 sections" image={require('../images/wallpaper2.jpg')} />
        <Card title="Sound Design" text="5 sections" image={require('../images/wallpaper3.jpg')} />
        <Card title="ARKit 2" text="10 sections" image={require('../images/wallpaper4.jpg')} />
        </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')} 
      logo={require('../images/logo-react.png')} 
      title="React for Designers" 
      text="Learn to implement your design and apply basic styling using powerful CSS techniques. Additionally, you’ll be able to use custom fonts from Google fonts and set up the structure for your images and CSS." />
  </div>
)

export default IndexPage