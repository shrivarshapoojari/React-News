 
import './App.css';
import Navbar from './components/Navbar'
import React, {useState } from 'react'
import News from './components/News';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 
 const App=()=> {

  const apiKey=process.env.REACT_APP_NEWS_API
 
       const [progress,setProgress]=useState(0);
  
 
     return (
      <>
      <div>
        <BrowserRouter>
              <LoadingBar
                      color='#0553fa'
                      height={3}
                      progress={progress}
                     onLoaderFinished={() => setProgress(0)}
               />
               <div>
               <Navbar/>
               </div>
           
              
        <Routes>

               <Route exact path="/" element= {<News setProgress= {setProgress} apiKey={apiKey} />} />
               <Route exact path="/business" element= {<News setProgress= {setProgress} apiKey={apiKey}  key='business' category='business'/>} />   
                {/* by giving differnt keys components will re render automatically else when u click bussiness the news wont be updated about business */}
               <Route exact path="/entertainment" element= {<News setProgress= {setProgress} apiKey={apiKey}  key='entertainment' category='entertainment'/>} />
               <Route exact path="/general" element= {<News setProgress= {setProgress} apiKey={apiKey}   key='general' category='general'/>} />
               <Route exact path="/health" element= {<News setProgress= {setProgress}  apiKey={apiKey} key='health' category='health'/>} />
               <Route exact path="/sports" element= {<News setProgress= {setProgress} apiKey={apiKey}  key='sports' category='sports'/>} />
               <Route exact path="/technology" element= {<News setProgress= {setProgress} apiKey={apiKey}  key='tech' category='technology'/>} />

               
                
 
       </Routes>


      </BrowserRouter>
      </div>

      
       </>
     )
   
 }
 export default App
 