import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description,imageUrl,url,author,date,source}=this.props;
    return (
      <div className='my-3'>
                         
             <div className="card mx-3" >
             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-info" style={{left:'90%', zIndex:'1'}}>
    {source}
     
  </span>
 
              
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel='noreferrer' target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
</div>

      </div>
    )
  }
}

export default NewsItem
