import { Link } from "react-router-dom"
export const Nav =()=>{
    return (
    <nav className='nav'>
        <Link className="p" to={'/'}>Home</Link>
        <Link className="p" to={'/profile'}>Profile</Link>
    </nav>
    )
}