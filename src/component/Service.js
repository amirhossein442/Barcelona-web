import React from "react"
import { useNavigate } from "react-router-dom"
export const Service= ()=>{
    let navigate = useNavigate();
    return <React.Fragment>
        <button className="btn-back" onClick={() => navigate("/")}>Go to home</button>
        <h1 className="txt">this is Service</h1>
    </React.Fragment>

}