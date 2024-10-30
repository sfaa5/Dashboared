import { faCircleUser, faUser, faUserAlt, faUserCircle, faUserMd, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

 const Card = memo(({request})=>{
console.log(request)

 const{deleteRequest,setDetails}=useGlobalContext();
 const category = request.category;
 const item = request.name;
 const size= request.size;
 const color=request.color;
 const brand = request.brand;
 const model = request.model;
 const readingLevel = request.reading_evel;
 const use = request.use;
 const language = request.language;
 const age_range = request.age_range;
 const condition = request.condition;
 const image =request.image;
 const dateTimeString = request.createdAt;
 const date = new Date(dateTimeString);
 const options = { month: 'long', day: 'numeric', year: 'numeric' };
 const formattedDate = date.toLocaleDateString('en-US', options);
 const name = request.donar.name;


    return(

        <div className="cardd">
                <div className="card-content">
                  <div className="user-info">
        
                   <div className="user-info" style={{gap:"8px"}} >
        
                   <FontAwesomeIcon icon={faCircleUser} />
                  
                    <div className="user-infoo">
                    
                  
                      <h2>{name}</h2>
                      <p><time dateTime={formattedDate}>{formattedDate}</time></p>
                    
                    </div>
                    </div>
        
                    <div className="badge"><h3>{category}</h3></div>
        
                  </div>
                  <img className="item-image" src={`http://localhost:5555/Images/${image}`} alt="Donation item" />

                 {category==="Clothing" && <div className="item-details">
                    <p><strong>Item:</strong> {item}</p>
                    <p><strong>Size:</strong> {size}</p>
                    <p><strong>Color:</strong> {color}</p>
                    <p><strong>Condition:</strong> {condition}</p>
                  </div>}

                  {category==="Electronics" && <div className="item-details">
                    <p><strong>Item:</strong> {item}</p>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Model:</strong> {model}</p>
                    <p><strong>Condition:</strong> {condition}</p>
                  </div>}

                  {category==="Toys" && <div className="item-details">
                    <p><strong>Item:</strong> {item}</p>
                    <p><strong>Age Range:</strong> {age_range}</p>
                    <p><strong>Special Features:</strong> interactive</p>
                    <p><strong>Condition:</strong> {condition}</p>
                  </div>}

                  {category==="Books" && <div className="item-details">
                    <p><strong>Item:</strong> {item}</p>
                    <p><strong>Language:</strong> {language}</p>
                    <p><strong>Reading level:</strong> {readingLevel}</p>
                    <p><strong>Condition:</strong> {condition}</p>
                  </div>}

                  {category==="Home Essentials" && <div className="item-details">
                    <p><strong>Item:</strong> {item}</p>
                    <p><strong>usage:</strong> {use}</p>
                    <p><strong> Special Features:</strong> Comfortable</p>
                    <p><strong>Condition:</strong> {condition}</p>
                  </div>}


                </div>
                <div className="card-footer">
                    <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                <Link to={`${"details"}`}>  <button onClick={()=>setDetails(request)} className="button">Accept</button></Link> 
                  <button onClick={()=>{deleteRequest(request._id)}} className="button variant-outline">Reject</button></div>
                </div>
              </div>
        
        );
    
})

export default Card


