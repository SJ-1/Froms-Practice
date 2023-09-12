import React, { useState } from "react";
let App = () => {
    let [name , upName] = useState(); //intial hook
    let [FullName , Name1] = useState(); //  final hook

    let inputEvent = (event) => { //onChange passing object
        upName(event.target.value);}
        
    let submit = () =>{
        Name1(name);
    }
    return(
        <>
            <h1>Sup, Homie {FullName}</h1>
            <input type="text" placeholder="Enter Name Brov" onChange={inputEvent} value={name}></input>
            <button onClick={submit}>Click Here</button>
        </> );
}
export default App;
