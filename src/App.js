import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hallo Gan</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// COMPONENT AND PROPERTIES.
// function Biodata(props) {
//   return <span>Umurnya {props.age}</span>
// }

// function Greeting(props) {
//   return <h1>Hallo Guys Nama Saya {props.name} - <Biodata age={props.age}/></h1>
// }

// STATE
class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: props.start
    }
  }

  //lifecycle
  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase() {
    //update state time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>{this.state.time} Detik</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Timer start="0"/>
          <Timer start="5"/>

          {/* <Greeting name="Guido" age="25"/>
          <Greeting name="Dika" age="12"/> */}
        </header>
      </div>
    );
  }
}

export default App;
