import React from 'react';
import './App.css';
import sound from './audio.mp3'
const audio = new Audio(sound)
var x=0;

class InputTimer extends React.Component{
  
  constructor(params){

    super(params);
    this.state={selectedtime:''};
    this.Storetime= this.Storetime.bind(this);
  }
  componentDidMount(){
  
  }
    Storetime(){
    
      audio.pause();
      audio.currentTime=0;
      var n=this.timerID=setInterval(()=>{
        // let date=new Date();
        var y=this.state.selectedtime;
         var t=((new Date()).toTimeString().substring(0,5));
      
        x++;
         if (y==(t)) {
         //alert("hello bitches");
        // console.log("hey");
         audio.play();
        } 
        else if(x==300){
          audio.pause();
          audio.currentTime=0;
          x=0;
            clearInterval(n);

        }else {
        
        }},1000)
console.log(this.state.selectedtime);
    }

  render(){
    
    return(<>

      <input onChange={e => this.state.selectedtime=e.target.value} id={'Timertime'} value={this.state.selectedtime}  type={"time"} ></input>
      <br/>
      <button onClick={this.Storetime}>select time</button>
    </>)
  }
}
export default App;

class Clockclass extends React.Component{
  constructor(props){
    super(props)

      this.state={date:new Date()};
    }
  componentDidMount(){
    this.timerID=setInterval(()=>(this.setState({date:new Date()})),1000)
  }
  componentWillUnmount(){
   clearInterval (this.timerID)
  }
render(){
  return (<>
 <div>
    <h2>{this.state.date.toLocaleTimeString()}<br/>{this.state.date.toLocaleDateString()}<br/></h2>
   </div> <InputTimer></InputTimer></>
  );
    }}
  function App(){
    
    return(
      <div className='mainbody'>
  <Clockclass/></div>)
}

