import './App.css';


import React, { Component, useState } from 'react';
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
import Programming from "./ProgrammingIllustration.png";
import CounterCar from "./CounterCar.png";
import DistanceControl from "./Distance_control.jpeg";
import MotorDcConnections from  "./ControlMotor.JPG";
import KeyBoard from "./KeyboardMatrix.JPG";
import DataD from "./Propuesta_proyecto_png.png";


import Micro from "./Micro.jpg"
import Tiago from "./tiago.jpg"
import Motor from "./ControlMotor.JPG"
import Car from "./carCounterHD.JPG"

import Barra from  "./shared/organims/Barra";
import Note from "./shared/organims/Note";

import Modal from "./shared/organims/Modal.jsx"
import ModalData from "./shared/organims/ModalData.jsx"
import ModalCounter from "./shared/organims/ModalCounter.jsx"
import ModalDistance from "./shared/organims/ModalDistance.jsx"
import ModalMotor from "./shared/organims/ModalMotor.jsx"
import ModalPSoC from "./shared/organims/ModalPSoC.jsx"


import 'antd/dist/antd.css';
import { Anchor } from 'antd';
const { Link } = Anchor;






function App() {
  const title_ =  "Luis Gerardo";
  const name =  "Luis Gerardo";
  const lastNAme = "Camara Salinas";

  const infoStatic =  {
    Datadistik: {//0 Datadistik
      title: "Scholar internship I (Plenumsoft) 4th quarter",
      video: "Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.",
      img:  DataD,
      body: "In this project, I worked with a software engineer in the Plenunsoft company to create a device that was able to recognized numbers using a microcontroller and a WebCam."
    },
    Markovito: {//1 Markovito
      title: "Intership III (INAOE) 10th quarter",
      video: "https://www.youtube.com/embed/Wy1KM_N_SP4",
      img:  "",
      body: `This Section shows an implementation of a basic C++ module in charge of moving the torso and face of a service robot and how these basic modules help solve tasks in the area of service robotics. Besides, the most recent tools in robotics and software architecture were used in order to communicate with the robot.`
    },
    Counter_track: {//2 Counter track
      title: "Counter and car tracker on road app",
      video: null,
      img:  CounterCar,
      body: "I built a bridge system to connect a python artificial vision app with an express JS API to show real-time counting of cars on a webpage created with Bootstrap studio and others tools."
    },
    DistanceAngular_Control: {//3 Distance
      title: "Distance Control node in ROS/C++ language",
      video: "https://www.youtube.com/embed/-Wortk3iDvE",
      img:  DistanceControl,
      body: `PD controller that controls the distance that our robot must move in a straight line, The program uses a reference value (setpoint) and the current position on the x-axis to start moving the robot until reaching the desired distance with the minimum error in centimeters. Also, this node is capable to rotate on its own axis passing another argument that represents the degree angle desired.`,
    },
    Angular_Control: {//4 Low level Control Example
      title: "PID-PD controller Psoc 5",
      video:"https://www.youtube.com/embed/Nb9wLnDV3SI",
      img:  MotorDcConnections,
      body:   "I made a simple PID-PD program in C language for a Microcontroller called PSoC to got experience on this kind of application and to then use that in a real robot application 'Markovito Jr. As you can see, the motor is cheap so I could not be as strict as I would want in order to get a perfectly steady-state error."
    },
    Psoc: {//5 Library
      title: "Matrix Keyboard 4x4 library for PSoC 5lp.",
      video: null,
      img:  KeyBoard,
      body: `This PSoC 5 library allows you to read the matrix keyboard reading  digits ('1', 'A', etc) or a digits combination ('1997', 'A10B'). So, it's a set of functions to read/write in an easy way on your Matrix Keyboard 4x4. Using this library you can create your PSoC projects without taking care of the low programming logic on the keyboard.`
    },
  }


  const  [isOpen, setIsOpen] = useState(false);
  const  [isOpenData, setIsOpenData] = useState(false);
  const  [isOpenDistance, setIsOpenDistance] = useState(false);
  const  [isOpenCounter, setIsOpenCounter] = useState(false);
  const  [isOpenAngular, setIsOpenAngular] = useState(false);
  const  [isOpenMatrix, setIsOpenMatrix] = useState(false);
  



  const  [ infoModal, setInfo] =  useState(   {
          title: "",
          video: "",
          img:  "",
          body: ""
        });

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


  const CallbackChangeState =  ( state, element) =>{

    switch(element){
      case 'Data':
        setIsOpenData(state);
        break;
      case "Markovito":
        setIsOpen(state);
        break;
      case 'Distance':
        setIsOpenDistance(state);
        break;
      case 'Counter':
        setIsOpenCounter(state);
        break;
      case "Angular":
        setIsOpenAngular(state);
        break;
      case "Matrix":
        setIsOpenMatrix(state);
        break;
    }
    
    return;
  }

  return (
    <div className="App">
      <div  className = "menu-box" >




        <h1 className = "name-user"> {title_} </h1>

        <Anchor  >
        <Link   href="#Profile" title="Profile" ></Link> 
      
        </Anchor>

        <Anchor>
          <Link    href="#Education" title="Education" />
        </Anchor>

        <Anchor>
          <Link   href="#Languaje" title="Lenguaje" />
        </Anchor>

        <Anchor>
          <Link   href="#skills" title="skills" />
        </Anchor>


        <Anchor>
          <Link   href="#ProgrammingLevel" title="ProgrammingLevel" />
        </Anchor>

        <Anchor>
          <Link   href="#Experience" title="Experience" />
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
            <h1>Universidad Polit??cnica Yucat??n 2020</h1>
            <p>Ing. Rob??tica Computacional</p>
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
            <h1>Universidad Polit??cnica Yucat??n 2020</h1>
            <p>Academic excellence 6th quarter September-December 2018</p>
          </div>
        </div>  

      </section>

      <section id = "Languaje" className =  "LanguajeContainer">
        <div className =  "TagBar">
          <h1>Language</h1>
        </div>

        <div className="GraphContainer">
          <img src= {EngLevel} className= "iconSectionStyle" />
          <img src= {SpaLevel} className= "iconSectionStyle" />

        </div>


      </section>

      <div className =  "TagBar"><h1>{"Skills && Interests"}</h1>  </div>
      <section id ="skills " className =  "SkillsContainer">
        
        <div className = "TagLeftandRow">
          <div className =  "TagBar2"><h1>Skills</h1>  </div>
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
                
        </div>
        <div className = "TagLeftandRow"> 

        <div className =  "TagBarR2"><h1>Interests</h1></div>
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
              }
              callback = {CallbackChangeState} modal =   "Data" 
          >
          </Note>



          <Note callback = {CallbackChangeState} modal = "Markovito" img =  {Markovito} title = {"Intership III (INAOE) 10th quarter"} text = { 
              "Developed robotic software in C++ programming language for a service robot (Markovito Jr.) under supervision of Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (INAOE) with the purpose of doing future research in this robotic field."
            } 
            >
          </Note>
          



          <Note 
            img={Car} title = {
              "Counter and car tracker on road application"
            } 
            text = { 
                `This application detects cars on road using principles of artificial vision and sends the current count number to and application.`
              }
              
              callback = {CallbackChangeState} modal = "Counter"   >  
            
          </Note>


          <Note 
            img={Tiago} title = {
              "Distance and Angular control in x axis for a Mobile Robot in ROS"
            } 
            text = { 
                `Distance and Angular control for a mobile robot (Tiago) using odometry according with a /odom topic published on ROS.`
              } callback = {CallbackChangeState} modal ="Distance">  
          </Note>

          <Note 
            img={Motor} title = {
              "Low level PID controller example in DC motor with PSoC 5"
            } 
            text = { 
                `The following example presents the implementation of a low-level PID controller to control the angular position of a dc motor.`
              } callback = {CallbackChangeState} modal = { "Angular"   }>  
          </Note>

          <Note img={Micro} title = {"Matrix keyboard library for PSoC-5lp"} text = { 
              "This PSoC 5 library allows you to read the matrix keyboard reading just digits ('1', 'A', etc) or a combination of digits ('1997', 'A10B'). This library is a summary function to read a simple Matrix Keyboard 4x4. This allows you to create your PSoC projects without taking care of the low programming logic of reading the buttons of the keyboard."
            } callback = {CallbackChangeState} modal = {"Matrix"} >  
          </Note>

{/* 
          const  [isOpen, setIsOpen] = useState(false);
  const  [isOpenData, setIsOpenData] = useState(false);
  const  [isOpenDistance, setIsOpenDistance] = useState(false);
  const  [isOpenCounter, setIsOpenCounter] = useState(false);
  const  [isOpenAngular, setIsOpenAngular] = useState(false);
  const  [isOpenMatrix, setIsOpenMatrix] = useState(false); */}


          <ModalData image = {infoStatic.Datadistik.img} title ={infoStatic.Datadistik.title} open = {isOpenData} onClose = { ()=>{setIsOpenData(false)}} >
            {infoStatic.Datadistik.body}
          </ModalData>

          <Modal video = {infoStatic.Markovito.video} title = {infoStatic.Markovito.title} open = {isOpen} onClose = { ()=>{setIsOpen(false)}} >
            {infoStatic.Markovito.body}
          </Modal>


          <ModalCounter image = {infoStatic.Counter_track.img} title ={infoStatic.Counter_track.title} open = {isOpenCounter} onClose = { ()=>{setIsOpenCounter(false)}} >
            {infoStatic.Counter_track.body}
          </ModalCounter>

          <ModalDistance video = {infoStatic.DistanceAngular_Control.video} title = {infoStatic.DistanceAngular_Control.title} open = {isOpenDistance} onClose = { ()=>{setIsOpenDistance(false)}} >
            {infoStatic.DistanceAngular_Control.body}
          </ModalDistance> 
          
         
          <ModalMotor video = {infoStatic.Angular_Control.video} title = {infoStatic.Angular_Control.title} open = {isOpenAngular} onClose = { ()=>{setIsOpenAngular(false)}} >
            {infoStatic.Angular_Control.body}
          </ModalMotor>

          <ModalPSoC image = {infoStatic.Psoc.img} title ={infoStatic.Psoc.title} open = {isOpenMatrix} onClose = { ()=>{setIsOpenMatrix(false)}} >
            {infoStatic.Psoc.body}
          </ModalPSoC>

        </div>


        

      </section>
      
      
    </div>
    
  );



}

export default App;
