 
import './App.css';
import Navbar from './components/Navbar'

 import React, { Component } from 'react'
import News from './components/News';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 
 export default class App extends Component {
   render() {
     return (
      <>
      <div>
        <BrowserRouter>
              <Navbar/>
              
        <Routes>

               <Route exact path="/" element= {<News/>} />
               <Route exact path="/business" element= {<News key='business' category='business'/>} />   
                {/* by giving differnt keys components will re render automatically else when u click bussiness the news wont be updated about business */}
               <Route exact path="/entertainment" element= {<News key='entertainment' category='entertainment'/>} />
               <Route exact path="/general" element= {<News  key='general' category='general'/>} />
               <Route exact path="/health" element= {<News key='health' category='health'/>} />
               <Route exact path="/sports" element= {<News key='sports' category='sports'/>} />
               <Route exact path="/technology" element= {<News key='tech' category='technology'/>} />

               
                
 
       </Routes>


      </BrowserRouter>
      </div>

      
       </>
     )
   }
 }
 