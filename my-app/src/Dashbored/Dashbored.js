import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import Users from "./Users";
import { Outlet, Route,Routes } from "react-router-dom";
export default function Dashbored(){
return(
    <div className="container">
        <Topbar/>
        <div className="content-flex">
        <Sidebar/>   
      
        <Outlet/>
   
        </div>
    </div>
);
}