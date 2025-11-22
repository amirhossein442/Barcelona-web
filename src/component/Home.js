import { Music,Play } from "lucide-react"
import logoBarca from '../pic/Untitled-3.png'
import thumnail from '../pic/hq720.avif'
import { useContext } from "react"
import {ProfileContext} from '../App'
export const Home= ()=>{
    const {userName} = useContext(ProfileContext)
    return <div>
        <h1 className='txtt'>Welcom <span style={{color:'red', marginLeft:'10px'}}>{userName}</span></h1>
        <div className="box-text-sound">
            <p className="text-sound">Just come outside for the night(Yeah)<br/>
            Take your time, get your light<br/>
            Johnny Dang, yeah, yeah<br/>
            I been out geekin’ (Bitch)<br/>
            FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)<br/>
            FE!N, FE!N (Yeah), FE!N, FE!N, FE!N<br/>
            The career’s more at stake when you in your prime (At stake)<br/>
            Fuck that paper, baby, my face on the dotted line (Dot, yeah)<br/>
            I been flyin’ out of town for some peace of mind (Yeah, yeah, bitch)<br/>
            It’s like always they just want a piece of mine (Ah)
            <button className="btn-more">More...</button></p>
            <div>
                <img className="imgBarcelona" src={logoBarca}/>
                <a href="https://youtu.be/U-l4ya3ejko?si=iOHdXausxT3yAOKQ"><Play className="logo"/></a>
            </div>
        </div>

        <div  className="forYotube">
            <a href="https://www.youtube.com/@FCBarcelona/featured" className="yotube">
                <img className="thumbnail" src={thumnail}/>
                <p className="duration">20:00</p>
            </a>
            <div className="description">
                <div className="text-des">
                    <h3>Yamall is the best football player in the word!?</h3>
                    <p>Yamall has shown exceptional skills on the field, making him a standout player in the world of football.</p>
                    <p className="views">2.8M views &middot; 2weeks ago</p>
                </div>
                <div className="channel-info">
                    <img className="imgchannel" src={logoBarca}/>
                    <p className="namechannel">Barcelona league</p>
                </div>
            </div>

        </div>
    </div>

}