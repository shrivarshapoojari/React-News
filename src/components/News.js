// type rce to get template
import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
const News =(props)=> {

const [articles,setArticles]=useState([])
const [loading , setLoading]=useState(true)
const [page,setPage]=useState(1);
const [totalResults,setTotalResults]=useState(0)


const  defUrl="https://www.austintexas.gov/themes/custom/coa/images/news-default.png" 

    const capitalize=(s)=>{
return s.charAt(0).toUpperCase()+s.slice(1);
}
      
        
     
   const  handleNextClick=async()=>
     {

          props.setProgress(10);
          
          let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          setLoading({loading:true}) 
          let data= await fetch(url);
          props.setProgress(50);
         let parsedData=await data.json();
          props.setProgress(70);
          setPage(page+1);
          setArticles(parsedData.articles);
          setLoading(false);
           
           
          props.setProgress(100);
     
          

     }
 const handlePreviousClick=async()=>{
     props.setProgress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
     setLoading({loading:true})    
     let data= await fetch(url);
     props.setProgress(50);
           
          let parsedData=await data.json();
          
          props.setProgress(70);
          setPage(page-1);
          setArticles(parsedData.articles);
          setLoading(false);
          
          props.setProgress(100);

}
const newsUpdate=  async()=>{
     props.setProgress(10);
     setLoading(true);
     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
     let data= await fetch(url);
     props.setProgress(30);
     let parsedData=await data.json();
     props.setProgress(70);
     setArticles(parsedData.articles);
     setTotalResults(parsedData.totalResults);
     setLoading(false);
     props.setProgress(100);
}
useEffect(  ()=>{
     document.title=`${capitalize(props.category)}-React News`;
   newsUpdate();


},[])
 

    
  
     
 return (
     
 <div className='container my-3'>
     <div>
     <h1 className="text-center" style={{'marginTop':'80px','marginBottom':'17px'}}>React News Top {capitalize(props.category)} Headlines  </h1>
     </div>
          
 {loading && <Spinner/>} 
           <div className="row">

               
               { !loading && articles.map((element)=>{return  <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage?element.urlToImage:defUrl} url={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"} source={element.source.name}/>


              </div> })} 
              
              
         </div>
         <div className="container d-flex justify-content-between">
<button   disabled={page===1}  type="button"   className="btn btn-dark" onClick={handlePreviousClick}> &larr;Previous</button>
         <button  disabled={page+1>Math.ceil(totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={handleNextClick}>Next&rarr;</button>
         </div>


 </div>
    )
  
}

News.defaultProps={
     country:'in',
     pageSize:9,
     category:'general'
     }
News.propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string
     }

export default News
