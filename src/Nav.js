import "./App.css" 
import { Link } from "react-router-dom";

let Nav=()=>{

    return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign">sign</Link>
    </div>
    )
}
export default Nav;