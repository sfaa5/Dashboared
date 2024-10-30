import {Link} from "react-router-dom"
export default function Topbar(){
    return(
        <div className=" container top-bar" >
            <h1> <span className="name-site" >G</span>iving<span className="name-site">C</span>ircle</h1>
            <Link className="register-nav">Go To Site</Link>
        </div>
);
}