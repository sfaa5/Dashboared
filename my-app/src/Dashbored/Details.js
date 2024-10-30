import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";

export default function Details() {

  const [points,setPoints]=useState();
  const [nameVolunteer,setNameVolunteer]=useState();

const {details,updateRequest}=useGlobalContext();

  function supmit (){
    // const formData = new FormData();
    // formData.append('nameVolunteer',nameVolunteer)
    // formData.append('points',points)


const formData ={
  points:points,
  nameVolunteer:nameVolunteer,
}

    console.log(formData)

    updateRequest(details._id,formData)

    // setPoints('');
    // setNameVolunteer('');


  }




console.log(details)
  return (
    <div className="rSide">
    <div className="card-details" >
      <img className="img-card-details" src={`http://localhost:5555/Images/${details.image}`} ></img>

      <div className="content-card">
        <div className="header-card">
          <div className="name-card">
            <h1>{details.name}</h1>
            <p>{details.condition}</p>
          </div>
          <div style={{padding:"9px 18px", height:"23px"}} className="badge"><h3 style={{fontSize:"15px"}} >{details.category}</h3></div>
        </div>
        <span>
          sfdf dsvsd iudshiudsd siuc dsiuc uisd jciujd iucdi ucdiucjdicdh
          udsjcjs csjdcsjdiu h uhcsiu i love my self more than any fuckin body can u hear me mother fucker so dont play with me  ok
        </span>

        {/* cloths */}
        {details.category==="Clothing"&& <div className="Size-color">
         
         <p>
           < strong   style={{marginRight:"5px"}} >Size:</strong> {details.size}
         </p>
         <p>
           <strong  style={{marginRight:"5px"}}>Color:</strong> {details.color}
         </p>
         <p>
           <strong style={{marginRight:"5px"}}>Donar:</strong> youssef
         </p>
       </div>}
                          {/* toys */}

       {details.category==="Toys"&& <div className="Size-color">
         
         <p>
           < strong   style={{marginRight:"5px"}} >Age Range:</strong> {details.age_range}
         </p>
         <p>
           <strong  style={{marginRight:"5px"}}>Special Features:</strong> {details.color}
         </p>
         <p>
           <strong style={{marginRight:"5px"}}>Donar:</strong> youssef
         </p>
       </div>}
                           {/* Home */}
       {details.category==="Home Essentials"&& <div className="Size-color">
         
         <p>
           < strong   style={{marginRight:"5px"}} >usage:</strong> {details.use}
         </p>
         <p>
           <strong  style={{marginRight:"5px"}}>Special Features:</strong> {details.color}
         </p>
         <p>
           <strong style={{marginRight:"5px"}}>Donar:</strong> youssef
         </p>
       </div>}
                           {/* Books */}
       {details.category==="Books"&& <div className="Size-color">
         
         <p>
           < strong   style={{marginRight:"5px"}} >Language:</strong> {details.language}
         </p>
         <p>
           <strong  style={{marginRight:"5px"}}>Reading level:</strong> {details.reading_evel}
         </p>
         <p>
           <strong style={{marginRight:"5px"}}>Donar:</strong> youssef
         </p>
       </div>}
                          {/* devices */}
           {details.category==="Electronics"&& <div className="Size-color">
         
         <p>
           < strong   style={{marginRight:"5px"}} >Brand:</strong> {details.brand}
         </p>
         <p>
           <strong  style={{marginRight:"5px"}}>Model:</strong> {details.model}
         </p>
         <p>
           <strong style={{marginRight:"5px"}}>Donar:</strong> youssef
         </p>
       </div>}             
                        





       
        <div style={{display:"flex",flexDirection:"row",gap:"36.6px", marginTop:"1rem" }} className="inputs-card">
        
      <div class="form-group">
       
        <input style={{width:"316px" ,display:"flex"}}  type="text"
 onChange={(e)=>{setNameVolunteer(e.target.value)}}
         
        //    onChange={e=>setColor(e.target.value)}
           id="inputAddress"
          placeholder="Enter volunteer"/>
      </div>
      
      <div class="form-group">
        
        <input style={{width:"316px" ,display:"flex"}}  type="number"
   onChange={(e)=>{setPoints(e.target.value)}}
          
    placeholder="Enter points"
        
          />
      </div>
    

        </div>
        <div className="card-buttons">
          <button onClick={supmit} className="button" >Confirm</button> <button  className="button variant-outline" >Reject</button>
        </div>
      </div>
    </div>
    </div>
  );
}
