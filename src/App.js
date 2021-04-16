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
import Markovito from "./MarkovitoJr.jpg";
import DataDistik from "./DataDistik.png";
import Programming from "./ProgrammingIllustration.png"
import Note from "./shared/organims/Note"
import Micro from "./Micro.jpg"
import Tiago from "./tiago.jpg"
import Motor from "./ControlMotor.JPG"
import Car from "./carCounterHD.JPG"

import Barra from  "./shared/organims/Barra";
import { Anchor } from 'antd';


const { Link } = Anchor;




function App() {
  const title_ =  "Luis Gerardo";
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
  
  const progSkill =  [
    {tag:  "Cpp",  value : 60,   },
    {tag:  "C",  value : 60,   },
    {tag:  "Python",  value : 60,   },
    {tag:  "JavaScript",  value : 60,   },
    {tag:  "Matlab",  value : 40,   },
    {tag:  "Css",  value : 30,   },
    {tag:  "HTML",  value : 30,   },
    {tag:  "C#",  value : 20,   },
  ]


  return (
    <div className="App">
      <div  className = "menu-box" >




        <h1 className = "name-user"> {title_} </h1>

        <Anchor >
        <Link  className = "btn-home" href="#Profile" title="Profile" ></Link>  
      
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

        <Anchor>
          <Link  className = "btn-home" href="#Experience" title="Experience" />
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

      <section id ="skills " className =  "SkillsContainer">
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

      <section id = "ProgrammingLevel" className =  "ProgrammingLanguageContainer">
        
        <div className =  "TagBar">
          <h1>Programming Language</h1>
        </div>

        <div className = "Graph">
          <Barra  tag  =  {progSkill[0].tag  } value = {progSkill[0].value}   ></Barra>
          <Barra  tag  =  {progSkill[1].tag  } value = {progSkill[1].value}   ></Barra>
          <Barra  tag  =  {progSkill[2].tag  } value = {progSkill[2].value}   ></Barra>
          <Barra  tag  =  {progSkill[3].tag  } value = {progSkill[3].value}   ></Barra>
          <Barra  tag  =  {progSkill[4].tag  } value = {progSkill[4].value}   ></Barra>
          <Barra  tag  =  {progSkill[5].tag  } value = {progSkill[5].value}   ></Barra>
          <Barra  tag  =  {progSkill[6].tag  } value = {progSkill[6].value}   ></Barra>
          <Barra  tag  =  {progSkill[7].tag  } value = {progSkill[7].value}   ></Barra>
        </div>



      </section>

      <section id = "Experience" className =  "ExperienceContainer">
        <div className =  "TagBar">
          <h1>Experience</h1>
        </div>

        <div className = "InterAcademic" >

          <div className =  "TagBar">
            <h1>Intership and Academic</h1>
          </div>

          <Note 
            img={DataDistik} title = {
              "Scholar internship I (Plenumsoft) 4th quarter"
            } 
            text = { 
                `Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.`
              }>  
          </Note>



          <Note img =  {Markovito} title = {"Intership (INAOE) 10th quarter"} text = { 
              "Developed robotic software in C++ programming language for a service robot (Markovito Jr.) under supervision of Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE) with the purpose of doing future research in this robotic field."
            }>
          </Note>

          <Note 
            img={Car} title = {
              "Counter and car tracker on road application"
            } 
            text = { 
                `This application detects cars on road using principles of artificial vision and sends the current count number to and application.`
              }>  
          </Note>


          <Note 
            img={Tiago} title = {
              "Distance and Angular control in x axis for a Mobile Robot in ROS"
            } 
            text = { 
                `Distance and Angular control for a mobile robot (Tiago) using odometry according with a /odom topic published on ROS.`
              }>  
          </Note>

          <Note 
            img={Motor} title = {
              "Low level PID controller example in DC motor with PSoC 5"
            } 
            text = { 
                `The following example presents the implementation of a low-level PID controller to control the angular position of a dc motor.`
              }>  
          </Note>


          <Note img={Micro} title = {"Matrix keyboard library for PSoC-5lp"} text = { 
              "This PSoC 5 library allows you to read the matrix keyboard reading just digits ('1', 'A', etc) or a combination of digits ('1997', 'A10B'). This library is a summary function to read a simple Matrix Keyboard 4x4. This allows you to create your PSoC projects without taking care of the low programming logic of reading the buttons of the keyboard."
            }>  
          </Note>






        </div>


        

      </section>


    </div>
    
  );



}

export default App;
