import { faCircleUser, faUser, faUserAlt, faUserCircle, faUserMd, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../component/Card";
import { useGlobalContext } from "../context/globalContext";
import { useEffect } from "react";

import { Link } from "react-router-dom";
export default function Requests(){

    const{getRequests,requests} = useGlobalContext();

    useEffect(()=>{
        getRequests();
    },[])


return (
    <div style={{display:"flex",flexDirection:"column",marginLeft:"7%",marginTop:"50px",width:"70%"}}>
    <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
<div className="header-sen">
    <h3 >Dnation Request</h3>
    <p>Accept or reject the donation</p>
</div>
<Link to={`${"addUser"}`}> <button  className="color button " >Create new</button> </Link>
    </div>

    <div className="card-container">
      {requests.map((request, index) => (
        <Card key={index} request={request} />
      ))}
    </div>
    </div>
  );

}