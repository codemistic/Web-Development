import React, { Component } from 'react'
import Newsitem from '../Newsitem'
import Spinner from './Spinner';

export default class News extends Component {

  static defaultProps={
    //these are default props and it is optional
    country:"in",
    pagesize:8,
    category:"general"
  }
      
  constructor(props)
  {
    super(props);
    console.log("I am the constructor from news component");
    this.state={
      articles:  [],
      loading:false, //It is used to add spinner when the webpage is buffering
      page: 1
    }
    var text=this.props.category;
    var a=text.toUpperCase();
    document.title= `${a}- NewsMonkey`;
  }
  
  //componentDidMount always runs after render method 
async componentDidMount(){
  //console.log("cdm");
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f31900ddb83a4b52bf702e1fe7089003&pageSize=${this.props.pagesize}`;
  this.setState({loading:true});//During the time the api is fetching the data then only spinner will be there which will show loading
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
     loading:false
  });
}
 
handlePrevclick=async()=>{
  console.log("Previous");
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f31900ddb83a4b52bf702e1fe7089003&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
  //pageSize is the property in news api where we can limit the number of news in a page
  this.setState({loading:true});//During the time the api is fetching the data then only spinner will be there which will show loading
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
  this.setState({page: this.state.page-1,
    articles: parsedData.articles,
    loading:false //Jab data aa jaiga then loading is set to  false sothat the spinner or loading sign is removed.
  
  });
}
handleNextclick=async()=>{
  console.log("Next");
 if(this.state.page+1<Math.ceil(this.state.totalResults/this.props.pagesize))
 {
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.cateogory}&apiKey=f31900ddb83a4b52bf702e1fe7089003&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
  this.setState({loading:true});//During the time the api is fetching the data then only spinner will be there which will show loading
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
  this.setState({page: this.state.page+1,
    articles: parsedData.articles,
  loading: false //Jab data aa jaiga then loading is set to  false sothat the spinner or loading sign is removed.
});
  }
}


  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
       {this.state.loading && <Spinner/>}
      <div className='row'>
        
          {this.state.loading===false && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}> 
          {//Key uss element ko diya jaata hai jisse aap return karte hai
          }
          
           <Newsitem  title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
          
           </div>
        })}  
            
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}> &larr;Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}
