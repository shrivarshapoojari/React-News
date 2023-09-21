 
import './App.css';
import Navbar from './components/Navbar'

 import React, { Component } from 'react'
import News from './components/News';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 
 export default class App extends Component {


       constructor()
        {
         super();
         this.state={
         progress:0
            }

         }
 
  
setProgress=(progress)=>{
    this.setState({progress:progress})
}
   render() {
     return (
      <>
      <div>
        <BrowserRouter>
              <LoadingBar
                      color='#0553fa'
                      height={3}
                      progress={this.state.progress}
                     onLoaderFinished={() => this.setProgress(0)}
               />
              <Navbar/>
              
        <Routes>

               <Route exact path="/" element= {<News setProgress= {this.setProgress} />} />
               <Route exact path="/business" element= {<News setProgress= {this.setProgress}  key='business' category='business'/>} />   
                {/* by giving differnt keys components will re render automatically else when u click bussiness the news wont be updated about business */}
               <Route exact path="/entertainment" element= {<News setProgress= {this.setProgress}  key='entertainment' category='entertainment'/>} />
               <Route exact path="/general" element= {<News setProgress= {this.setProgress}   key='general' category='general'/>} />
               <Route exact path="/health" element= {<News setProgress= {this.setProgress}  key='health' category='health'/>} />
               <Route exact path="/sports" element= {<News setProgress= {this.setProgress}  key='sports' category='sports'/>} />
               <Route exact path="/technology" element= {<News setProgress= {this.setProgress}  key='tech' category='technology'/>} />

               
                
 
       </Routes>


      </BrowserRouter>
      </div>

      
       </>
     )
   }
 }
 