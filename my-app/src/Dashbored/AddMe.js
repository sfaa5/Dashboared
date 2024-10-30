import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";

function AddMe({ path }) {
  const pathhh = path;

  const { addVolunteer, addLeader, addUser,addNeedy, error, setError } =
    useGlobalContext();

  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [fullName, setFullName] = useState()
   const [nameLeader, setnNameLeader] = useState()
  const [points, setPoints] = useState()
  const [file, setFile] = useState() 


 





  function handleSubmit (e)  {
    e.preventDefault();







     // Debugging to check formData before submission

    if (pathhh === "user") {
      const formData = new FormData();

    formData.append('name',name);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('fullName',fullName);
    formData.append('nameLeader',nameLeader);
    formData.append('points',points);
    formData.append('file',file);
      console.log("inUser");
      addUser(formData);
    } else if (pathhh === "leader") {
      const formData = new FormData();

    formData.append('name',name);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('fullName',fullName);
    formData.append('nameLeader',nameLeader);
    formData.append('points',points);
    formData.append('file',file);
      console.log("inLeader");
      addLeader(formData);
    } else if (pathhh === "volunteer") {

    let  data = {
        name:name,
        email:email,
        password:password,
        nameLeader:nameLeader,
      }

      console.log("inVolunteer");
      console.log(data)
      addVolunteer(data);
    }else if (pathhh==="needy"){
      const formData = new FormData();

      formData.append('name',name);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('fullName',fullName);
      formData.append('nameLeader',nameLeader);
      formData.append('points',points);
      formData.append('file',file);
      addNeedy(formData);
    }

setEmail('')
setFile('')
setFullName('')
setName('')
setPassword('')
setPoints('')
setnNameLeader('')

  };



  
  return (

    <div  class="containerrr">
    <h1 class="title">Add User</h1>
    <h4>Enter the user's information to add them to the dashboard</h4>
    <form onSubmit={handleSubmit} class="form">
      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      <div class="form-group">
        <label for="name">Name</label>
        <input
               type="text"
               name={"name"}
               value={name}
               onChange={(e)=>setName(e.target.value)}
             
               id="inputEmail4"
        
        placeholder="Enter name"/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
           name={"email"}
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email"/>
      </div>
      </div>



      <div class="form-group">
        <label for="email">Full name</label>
        <input style={{width:" 840px"}} type="text"
           name={"fullName"}
           value={fullName}
           onChange={(e)=>setFullName(e.target.value)}
          placeholder="Enter full name"/>
      </div>

      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      <div class="form-group">
        <label for="email">Password</label>
        <input style={{width:"840" ,display:"flex"}}  type="number"

           name={"password"}
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           id="inputAddress"
          placeholder="password"/>
      </div>

      {(pathhh==="leader" || pathhh==="user")&&(
        <div class="form-group">
        <label for="email">File image</label>
        <input style={{width:"840" ,display:"flex"}}  type="file"

          onChange={(e)=>setFile(e.target.files[0])}
        
          />
      </div>)}


      {pathhh==="needy"&&(
             <div class="form-group">
             <label for="points">points</label>
             <input style={{width:"840" ,display:"flex"}}  type="number"
     
                name={"password"}
                value={points}
                onChange={(e)=>setPoints(e.target.value)}
                id="inputAddress"
               placeholder="points"/>
           </div>
      )}
      {pathhh==="volunteer"&&(
      <div class="form-group">

      <label for="volunteer">Leader</label>
           <input
           type="text"
           name={"leader"}
           value={nameLeader}
           onChange={(e)=>setnNameLeader(e.target.value)}
        
           id="inputAddress"
           placeholder="please enter leader name "
         />
</div>)}
</div>
      <button type="submit" class="btn">Add User</button>
    </form>
  </div>

  );
}

export default AddMe;


    // <form onSubmit={handleSubmit} class="form row g-3">
    //   <div class="col-md-6">
    //     <input
    //       type="text"
    //       name={"name"}
    //       value={name}
    //       onChange={handleInput("name")}
    //       class="form-control"
    //       id="inputEmail4"
    //       placeholder="user name"
    //     />
    //   </div>
    //   <div class="col-md-6">
    //     <input
    //       type="email"
    //       name={"email"}
    //       value={email}
    //       onChange={handleInput("email")}
    //       class="form-control"
    //       id="inputPassword4"
    //       placeholder="email"
    //     />
    //   </div>
    //   <div class="col-12">
    //     <input
    //       type="number"
    //       name={"password"}
    //       value={password}
    //       onChange={handleInput("password")}
    //       class="form-control"
    //       id="inputAddress"
    //       placeholder="password"
    //     />
    //   </div>
    //   <div class="col-12">
    //     <input
    //       type="text"
    //       name={"leader"}
    //       value={nameLeader}
    //       onChange={handleInput("nameLeader")}
    //       class="form-control"
    //       id="inputAddress"
    //       placeholder="please enter volunteer name "
    //     />
    //   </div>

    //   <button style={{ marginTop: "20px" }}>Add</button>
    // </form>