import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  constructor(){
      super();
      console.log("hey iam a constructor from news component")
      this.state = {
        articles: [],
        loading: false
      }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6741fbcc7d614a639721ec0113a11566"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsNerd-Latest News</h2>
        

        <div className="row">
        {this.state.articles.map((element)=>{
         return  <div className="col-md-4" key={element.url}>
         <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
         </div>

        })}
           


        </div>
      
      </div>
    );
  }
}

export default News;
