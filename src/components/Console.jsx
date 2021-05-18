import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Game(props) {
  const { id } = props;
  const [consoleSystem, setConsole] = useState(null);
  useEffect(() => {
    axios.get("http://csc225.mockable.io/consoles/"+id).then((response) => {
      setConsole(response.data);
    });
  }, []);

  if(!consoleSystem)
  {
    return <img className={"App-logo-spin App-logo"} src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png" alt="loading"></img>
    }

 // return <p>Books with id {id}</p>;
return (<div className="card text-dark pt-5 mx-5" style={{width:"10rem"},{alignItems: "center"}}>
 <img src={consoleSystem.image} alt ={consoleSystem.title} />
   <div className="card-body text-alert">
   <h2 >{consoleSystem.name}</h2>
   <hr></hr>
   <ul className="d-inline-flex list-group list-group-flush " >
    <div style={{width: "275px", textAlign: 'left', alignItems: 'center', paddingLeft : '50px', paddingRight: '50px'}}>
    <li className="list-group-item">Price: ${consoleSystem.price}</li>
    <li className="list-group-item">Country: {consoleSystem.country}</li>
    <li className="list-group-item">Released: {consoleSystem.releaseYear}</li>
    </div>
  </ul>
   </div> 
 </div>
  );
}

export default Game;
