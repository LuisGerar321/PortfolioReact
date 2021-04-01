import './App.css';


import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import myPhoto from "./UserPhoto.jpg";
import upyPhoto  from  "./upy.jpg";
import itepLogo from  "./itepLogo.png";
import Icon from "./Icon.png";
import EngLevel from "./EnglishLevelLenguage.PNG";
import SpaLevel from "./SpanishLevelLenguage.PNG";
import ProgLevel from "./ProgSkills.PNG";

import { Anchor } from 'antd';

const { Link } = Anchor;




function App() {
  const title_ =  "Resume";
  const name =  "Luis Gerardo";
  const lastNAme = "Camara Salinas";

  const btnHome = {
    border: "none",
    width: "12vw",
    height: "8vh",
    alignSelf: "center",

    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.2vw",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "#000000",
    transition: "0.3s",
  }
  return (
    <div className="App">
      <div  className = "menu-box" >




        <h1 className = "name-user"> {title_} </h1>

        <Anchor >
        <Link  href="#Profile" title="Profile" ></Link>  
      
        </Anchor>

        <Anchor>
          <Link  className = "btn-home"  href="#Education" title="Education" />
        </Anchor>

        <Anchor>
          <Link  className = "btn-home" href="#Languaje" title="Lenguaje" />
        </Anchor>

        <Anchor>
          <Link  className = "btn-home" href="#skills" title="skills" />
        </Anchor>


        <Anchor>
          <Link  className = "btn-home" href="#ProgrammingLevel" title="ProgrammingLevel" />
        </Anchor>


        {/* <a href="#Profile"> <button className  = "btn-home btn1" >Profile</button>    </a>
        
        <button href="#Education" className  = "btn-home btn1" >Education</button>  
        <button className  = "btn-home" >Language</button>  
        <button className  = "btn-home" >Education</button> */}

      </div>



      <section className =  "Info-User">
        <div className = "photo-item"> 
            <img src= {myPhoto} className = "picture"/>
        </div>
        {/*  check font  */}

        <div className = "nameTitleStyle">
          <h1 className  = "nameTitleItem" >{name} </h1>
          <h1 className  = "nameTitleItem" >{lastNAme} </h1>
        </div>

      </section>

      <section id= "Profile" className =  "ProfileContainer">
        <div className =  "TagBar">
          <h1>Profile</h1>
        </div>
        <p>
          Computational Robotics Engineer and JavaScript Associate Software 
          Engineer capable of working collaboratively and cooperatively in a 
          software development company. Interested in contributing to the 
          development of innovation, smart, disruptive applications, and the 
          philosophy of sharing acompetitive knowledge used in IT Companies.
        </p>

      </section>

      <section id= "Education" className =  "EducationContainer">

        <div className =  "TagBar">
          <h1>Education</h1>
        </div>

        <div  className =  "icon-contentItem"> 
          <div  className = "icon">
              <img src= {upyPhoto} className= "photo" />
          </div>
          <div>
            <h1>Universidad Politécnica Yucatán 2020</h1>
            <p>Ing. Robótica Computacional</p>
          </div>
        </div> 
      
        <div  className =  "icon-contentItem"> 
          <div  className = "icon">
              <img src= {itepLogo} className= "photo" />
          </div>
          <div>
            <h1>ITEP English level certificate</h1>
            <p>Upper intermediate English certificate(B2) in December 2019</p>
          </div>
        </div>
          <div  className =  "icon-contentItem"> 
          <div  className = "icon">
              <img src= {Icon} className= "photo" />
          </div>
          <div>
            <h1>Universidad Politécnica Yucatán 2020</h1>
            <p>Academic excellence 6th quarter September-December 2018</p>
          </div>
        </div>  

      </section>

      <section id = "Languaje" className =  "LanguajeContainer">
        <div className =  "TagBar">
          <h1>Language</h1>
        </div>

        <div className="GraphContainer">
          <div  className = "icon">
                <img src= {EngLevel} className= "photo" />
          </div>

          <div  className = "icon">
                <img src= {SpaLevel} className= "photo" />
          </div>

        </div>


      </section>

      <section id ="skills " className =  "ProfileContainer">
        <div className = "TagLeftandRow">
          <div className =  "TagBar"><h1>Skills</h1>  </div>
          <div className =  "TagBarR"><h1>Interests</h1></div>      
        </div>
        <div className = "TagLeftandRow"> 
          <ul>
            <li>Dedicate</li>
            <li>Responsable</li>
            <li>Organized</li>
            <li>Autodidact</li>
            <li>Multitasking</li>
            <li>Teamwork</li>
            <li>Effective communication</li>
            <li>Conflict management</li>
          </ul>
          
          <ul>
            <li>Apps development </li>
            <li>Data science </li>
            <li>Machine Learning </li>
            <li>Computer's science</li>
            <li>Internet of things </li>
            <li>Artificial vision </li>
            <li>Robotics</li>
            <li>Game development </li>
          </ul>

        </div>
      </section>


      <section id = "Experience" className =  "ExperienceContainer">
        <div className =  "TagBar">
          <h1>Experience</h1>
        </div>
      </section>

      

      <section id = "ProgrammingLevel" className =  "ProgrammingLanguageContainer">
        
        <div className =  "TagBar">
          <h1>Programming Language</h1>
        </div>

        <img src= {ProgLevel} className= "ProgrammingSkillsPicture" />


      </section>


    </div>





    
  );



}

export default App;
