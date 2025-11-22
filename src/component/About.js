import React from "react"
import { useNavigate } from "react-router-dom"
export const About= ()=>{
    let navigate = useNavigate();
    return <React.Fragment>
        <button className="btn-back" onClick={() => navigate("/")}>Go to home</button>
        <h1 className="txt">this is About</h1>
    </React.Fragment>
    
}