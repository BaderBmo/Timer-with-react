import React from 'react';
import View from './View';

class Timer extends React.Component{
constructor(props){
    super(props)
    this.state ={
        ms:0,
        id:0,} }

reset = () =>{
    this.setState({ms:0,id:0})
    clearInterval(this.state.id)}

increment = () =>{ this.setState(
    {ms: this.state.ms+1000})}
    
pause = () =>{
    clearInterval(this.state.id)
    this.setState({id:0})}

start = () =>{
let x =setInterval(this.increment,1000)
this.setState({
    id:x})
return(x)}

control = () =>{
    if (this.state.id === 0){
        return this.start()
    }
    else{
        return this.pause()}}

render(){
return <div className="container">
    <View value={this.state.ms}/>

    <div className="buttons">
        <button onClick={this.control} className="start">{this.state.id ===0 ? 'START' : 'PAUSE'}</button>
        <button onClick={this.reset} className="reset">RESET</button>
    </div>
</div>}}
export default Timer;