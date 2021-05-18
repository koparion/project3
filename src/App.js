import "bootstrap/dist/css/bootstrap.min.css";
import Games from './components/Consoles';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
  //function App (){
  render() {
    return (
    <div className="bg-secondary pt-5">
      {/* <div className={"App-logo-spin App-logo"}><img src="https://static.thenounproject.com/png/29487-200.png"></img></div> */}

      <div className="container fw-bold text-center bg-cyan text-white">
    
      
      {/* <h1 className="">Top 4 Consoles</h1> */}
      <Games />
      </div>
    </div>
  );
}
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
