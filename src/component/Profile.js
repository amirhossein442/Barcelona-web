import { useContext } from "react"
import {ProfileContext} from '../App'
import {ChanchProfile} from '../component-inside/ChanchProfile'
import { useNavigate } from "react-router-dom"
export const Profile = ()=>{
    let navigate = useNavigate()
    const {userName, setUserName} = useContext(ProfileContext)
    return <div>
        <button className="btn-back" onClick={() => navigate("/")}>Go to home</button>
        <h1 className="txt">Welcom {userName}</h1>
        <ChanchProfile setUserName={setUserName}/>
    </div>
}