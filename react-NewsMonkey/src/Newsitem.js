import React, { Component } from 'react'
export default class Newsitem extends Component {
  render() {
      let {title ,description,imageurl,newsurl}=this.props;
    return (
      <div className='my-4'>
        <div class="card" style={{width: "18rem"}}> {/*
        the first brace of style shows that it is a javascript while the next inside one shows that it is javascript object 
        */ }
  <img src={!imageurl?"https://cbsnews2.cbsistatic.com/hub/i/r/2022/05/28/341e9ba4-dca8-42db-8cda-5dfc0adab77c/thumbnail/1200x630/ab0367d9d15b8051150f01ad33523e6c/memorial-day-weekend-flight-cancelations.jpg":imageurl} class="card-img-top" alt=".."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a rel="noreferrer" href={newsurl}  target="_blank" class="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
