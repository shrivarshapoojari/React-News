// type rce to get template
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {

static defaultProps={
country:'in',
pageSize:9,
category:'general'
}
static propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
 
  defUrl="https://www.austintexas.gov/themes/custom/coa/images/news-default.png" 
articles=[];
capitalize=(s)=>{
return s.charAt(0).toUpperCase()+s.slice(1);
}
     constructor(props)
     {
          super(props);
          this.state={
               articles:this.articles,
               loading:false,
               page:1
          }
         document.title=`${this.capitalize(this.props.category)}-React News`;
     }
     handleNextClick=async()=>
     {

          this.props.setProgress(10);
          
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=632babb93466405aa4c19d6774bd3ea8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true}) 
          let data= await fetch(url);
          this.props.setProgress(50);
         
          let parsedData=await data.json();
          this.props.setProgress(70);
          
          this.setState({
           page:this.state.page+1,
           articles:parsedData.articles,
           loading:false
          
          
          })
          this.props.setProgress(100);
     
          

     }
 handlePreviousClick=async()=>{
     this.props.setProgress(10);
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=632babb93466405aa4c19d6774bd3ea8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})    
     let data= await fetch(url);
     this.props.setProgress(50);
           
          let parsedData=await data.json();
          
          this.props.setProgress(70);
          this.setState({
           page:this.state.page-1,
           articles:parsedData.articles,
           loading:false
          
          
          })
          this.props.setProgress(100);

}
    async componentDidMount()
     {   this.props.setProgress(10);
          this.setState({loading:true})
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=632babb93466405aa4c19d6774bd3ea8&page=1&pageSize=${this.props.pageSize}`;
           let data= await fetch(url);
           this.props.setProgress(30);
          let parsedData=await data.json();
          this.props.setProgress(70);
          this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
          this.props.setProgress(100);
     }
    
  render() {
     
    return (
 <div className='container my-3'>
          <h1 className="text-center my-3">React News Top {this.capitalize(this.props.category)} Headlines  </h1>
 {this.state.loading && <Spinner/>} 
           <div className="row">

               
               { !this.state.loading && this.state.articles.map((element)=>{return  <div className="col-md-4" key={element.url}>
                   <NewsItem  title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage?element.urlToImage:this.defUrl} url={element.url} date={element.publishedAt} author={element.author?element.author:"Unknown"} source={element.source.name}/>


              </div> })} 
              
              
         </div>
         <div className="container d-flex justify-content-between">
<button   disabled={this.state.page===1}  type="button"   className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;Previous</button>
         <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
         </div>


 </div>
    )
  }
}

export default News
