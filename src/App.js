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

// component and properties

function Biodata(props) {
  return <span>Umurnya {props.age}</span>
}

function Greeting(props) {
  return <h1>Hallo Guys Nama Saya {props.name} - <Biodata age={props.age}/></h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Greeting name="Guido" age="25"/>
          <Greeting name="Dika" age="12"/>
        </header>
      </div>
    );
  }
}

export default App;
