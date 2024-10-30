import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dashbored from "../css/dashbored.css";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Alertt = ({  onClose,id }) => {



    const nav = useNavigate();
    const [name, setName] = useState("");
    const [ nameError , setNameError ] =useState(false);


    async function submit(e) {
        e.preventDefault();
        console.log(name);
        
    try{   
    let res = await axios.put(`http://localhost:5555/Rdonation/${id}`,{
     nameVolunteer:name,
    })
    .then(res=>
      {
       
        console.log(res) ; 
        if(res.data==="Volunteer not found"){
          setNameError(true);
          console.log("erorrrr");
          console.log("user name is taken")
        }else{
                nav(`/Dashbored`)
        }
      }
      );
    
        }catch(err){
          if( err.response && err.response.status === 422 )
         {
          //  setEmailError(err.response.status);
           console.log("aaaaaaaa")
         }
        //  setAccept(true);
        }
     }


  return (
    <div
      style={{
        backgroundColor: "gray",
        borderRadius: " 10px",
        position: "absolute",
        height: "250px",
        width: "500px",
        left: "40%",
        top: "280px",
        display:"flex",
        justifyContent:"center"
      }}
    >
      <FontAwesomeIcon
        style={{
          position: "relative",
          display: "flex",
          left: "420px",
          top: "10px",
        }}
        onClick={onClose}
        icon={faXmark}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "400px",
       
         
          marginTop: "30px",
        }}
      >
        <form onSubmit={submit}  style={{display:"flex",flexDirection:"column",gap:"20px"}}  >
        <span>Please enter the name of Volunteer</span>
             <input type="text"  onChange={(e) => setName(e.target.value)}  ></input>
        <button>Ok</button>
        </form>
      </div>
    </div>
  );
};

export default Alertt;
