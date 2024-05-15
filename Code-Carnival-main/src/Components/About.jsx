import React from 'react'
import '../styles/about.css'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar color={"#fff"} />
      <div className='about'>
        <h1>About</h1>
        <div className="content-about">
          <p><b>Code Carnival</b> is the coding competition conducted every week by the department of <b>CSE, IT & AIML</b> in association with the CSI Student chapter. This aims in building the competitive spirit of coding skills in students. This platform brings the students of various branches to solve the problems using their logical thinking.<br /><br />
            Competitive programming is a sport where contestants solve algorithmic problems within a time limit using a programming language of their choice. It tests problem-solving skills, knowledge of algorithms, and ability to write efficient code.<br /><br />
            These competitions provide a challenging environment where participants can solve complex problems within a given time limit. By participating in coding competitions, programmers can improve their problem-solving skills, programming proficiency, and familiarity with programming languages and tools.<br /><br />
            These problems can range in difficulty, but they are typically designed to challenge a programmer's problem-solving and coding skills. Coding competitions often have strict time limits, so participants must be able to write efficient code that solves the problem correctly within the given time frame.<br /><br />
            Web development and software engineering require basic algebra and arithmetic, while more specialized areas such as machine learning, computer graphics, or data analysis require advanced mathematical competency. Also, logical thinking and problem-solving skills are essential for coding.
          </p>
          <h3 style={{ textAlign: "left", margin: "20px 0px"}}>Benfits of Learning to Code</h3>
          <ul style={{ padding: "0px 20px" }}>
            <li>Coding can help you understand technology.</li>
            <li>It can enhance problem-solving skills.</li>
            <li>Coding can be applied to data visualisation.</li>
            <li>Coding can complement creativity.</li>
            <li>Coding is a universal language.</li>
          </ul>
          <div className='hackerrank'>
          <h3 style={{ textAlign: "center", marginTop: "20px"}}>Hacker Rank, Code chef and Leet code is used for conducting this coding competition.</h3><br/>
          <p style={{marginTop:"0px"}}>These contests offer young, talented students and programmers the opportunity to measure their capabilities and compare themselves to other programmers worldwide, motivating them to practice more. This competition will help you to build your confidence is solving the problem.</p>
          <h3 style={{marginTop:"20px",paddingBottom:"20px"}}>Enjoy Learning, Keep Coding……</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
