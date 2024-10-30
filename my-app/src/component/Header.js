
import "../../public/Style.css";
import {Link} from "react-router-dom" ; 
export default function Header (){ 
   
  return(
    <div className="container" >
        <nav
        className="flex"
        >
            <div className="flex2">
                <Link to="/Home" className="homef">Home</Link>
                <h6>About</h6>
            </div>

            <div className="flex">
                
                    <>
                <Link to="/register" style={{textAlign:"center"}} className="register-nav">
                  Register
                </Link>
                <Link to="/Login" style={{textAlign:"center"}} className="register-nav">
                    Login
                </Link>
                </>
           
                    {/* <div className="register-nav" onClick={handleLogOut} >Log out</div> */}
                

            </div>
                
           
        </nav>
    </div>
  );


}