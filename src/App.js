import {Component} from 'react';
import style from "./style.css"
export default class App extends Component{
  state = {
    on : "false"
  }
  handleclick = () => {
    this.setState ({on:!this.state.on})
  }
  render(){
    return(
      <div>
        <button onClick={this.handleclick}>
          Switch {this.state.on ? "off" : "on"}
        </button>
        <div className={`light-bulb ${this.state.on ? "on" : "off"}`}></div>
      </div>
    )
  }
}