import React, { useEffect, useState } from "react";
import axios from "axios";
import Game from "./Console";


function Games() {
  const [consoleSystems, setConsoles] = useState([]);
  const [selectedConsoles, setSelectedConsoles] = useState(null);

  useEffect(() => {
    axios.get("http://csc225.mockable.io/consoles").then((response) => {
      setConsoles(response.data);
    });
  }, []);

  if (consoleSystems.length === 0) {
    return (<img className={"App-logo-spin App-logo"} src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png" alt="loading"></img>
    );
  }
  
  if (!!selectedConsoles) {
    // !! forces to return true or false
    return (
      <div>
        <Game id={selectedConsoles}/>
        {/* <p>You selected ({selectedConsoles})</p> */}
        <br></br><button style={{marginTop: '10px'}} onClick={() => setSelectedConsoles(null)}>RETURN</button>
      </div>
    );
  }

  return (
    <div>
      {selectedConsoles}
      <div className="container fw-bold text-center bg-cyan text-whdite pt-5">
            <h1>Top Gaming Systems</h1>
          </div>
      {consoleSystems.map((consoleSystem) => {
        return (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} className="position-relative"> 
            <p className="" key={consoleSystem.id} >
              <button  style={{width: "210px", textAlign: 'left'}} className="m-2 bg-info " onClick={() => setSelectedConsoles(consoleSystem.id)}>
              {consoleSystem.id}) {consoleSystem.name}  
              </button>
            </p>   
          </div>
        );
      })}
    </div>
  );
}

export default Games;
