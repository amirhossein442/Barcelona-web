import { useContext,useState } from "react"
import {ProfileContext} from '../App'
export const ChanchProfile=()=>{
    const [newUsername, setNewUsername]= useState("")
    const {setUserName} = useContext(ProfileContext)
    return(
        <div className="input">
            <input className="barName" onChange={(event)=> {setNewUsername(event.target.value)}}/>
            <button className="btnName" onClick={()=> {setUserName(newUsername)}}>Update</button>
        </div>
    )
}