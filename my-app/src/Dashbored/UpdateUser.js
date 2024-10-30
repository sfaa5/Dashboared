import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";


export function UpdateUser({path}) {

  console.log(path)

  const[ runUserEffect , setRun ] = useState(0);

  const id = window.location.pathname.split("/").slice(-1)[0];
  const nav = useNavigate();

const { updateNeedy,updateUser,updateLeader, updateVolunteer} = useGlobalContext()

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const[nameLeader,setLeader]=useState('');
const [fullName,setFullName]=useState('');
const [points , setPoints]=useState()



const handleInput = (name, value) => {
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;
    case'nameLeader':
    setLeader(value);
    break;
    case'fullName':
    setFullName(value);
    break;
    case 'points':
      setPoints(value)
      break;
    default:
      break;
  }
};


//   const [inputState, setInputState] = useState({
//     name: '',
//     email: '',
//     password: '',
// })

// const { name, email, password } = inputState;

// const handleInput = name => e => {
//   setInputState({...inputState, [name]: e.target.value})

// }

// const handleSubmit = e => {
//   e.preventDefault()
//   addUser(inputState)
//   setInputState({
//       name: '',
//       email: '',
//       password: '',
//   })
// }

  useEffect(() => {

    axios.get(`http://localhost:5555/${path}/${id}`)
     
      .then((data) => {
        console.log(id)
        console.log(data.data.data);
        setName(data.data.data.name);
        setEmail(data.data.data.email);
        setPassword(data.data.data.password);
        setFullName(data.data.data.fullName);
        setPoints(data.data.data.points);
        setLeader(data.data.data.leader?data.data.data.leader.name:"");

    });
  }, []);

async function submit(e){
  e.preventDefault();
  console.log("send")

  let user ={
    name:name,
    email:email,
    password:password,
    nameLeader:nameLeader,
    fullName:fullName,
    points:points,
  }

if(path==='books'){updateUser(id,user);
console.log("update in user")

}else if(path==='volunteers'){ updateVolunteer(id,user)

  console.log("update in volunteer")
  
}else if (path==="leaders"){
  updateLeader(id,user)
}
else if (path==="needy"){
  updateNeedy(id,user)
}

  

  

}




  return (
    // <>
    
    // <h1>UpDate User </h1>
      
    //   <Form
    //     button="Update"
    //     name={name}
    //     email={email}
    //     id="/Dashbored/Users"
    //     endpoint={`user/update/${id}`}
    //     hasLocalStorage={false}
    //     bbutton={true}

    //   />
    // </>


<div class="containerrr">
    <h1 class="title">Update User</h1>
    <h4>Enter the user's information to update them to the dashboard</h4>
    <form onSubmit={submit} class="form">
      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      <div class="form-group">
        <label for="name">Name</label>
        <input
               type="text"
               name={"name"}
               value={name}
              
             
               id="name"
        
               onChange={(e)=>handleInput('name',e.target.value)}  


        placeholder="Enter name"/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
           name={"email"}
           value={email}
           onChange={(e)=>handleInput('email',e.target.value)}
           id="email"
         />
      </div>
      </div>

      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input style={{width:"840px"}} type="text"
           name={"fullName"}
           value={fullName}
           onChange={(e)=>handleInput('fullName',e.target.value)}
           id="fullName"
         />
      </div>



      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      <div class="form-group">
        <label for="password">Password</label>
        <input style={{width:"840" ,display:"flex"}}  type="number"

           name={"password"}
           value={password}
           onChange={(e)=>handleInput('password',e.target.value)}
           id="password"
         /> 
      </div>

     {path==="needy" &&( <div class="form-group">
        <label for="password">points</label>
        <input style={{width:"840" ,display:"flex"}}  type="number"

           name={"points"}
           value={points}
           onChange={(e)=>handleInput('points',e.target.value)}
           id="password"
         /> 
      </div>)}


      {path==="volunteers"&&(
      <div class="form-group">

      <label for="volunteer">Leader</label>
           <input
           type="text"
           name={"leader"}
           value={nameLeader}
           onChange={(e)=>handleInput("nameLeader",e.target.value)}
        
           id="inputAddress"
           placeholder="please enter leader name"
         />
</div>)}
 
</div>
      <button type="submit" class="btn">Save</button>
    </form>
  </div>







  );
}


{/* <form  onSubmit={submit} class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">User</label>
        <input name={'name'} value={name} onChange={(e)=>handleInput('name',e.target.value)}  type="text" class="form-control" id="inputEmail4"/>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Email</label>
        <input  name={'email'} value={email} onChange={(e)=>handleInput('email',e.target.value)} type="email" class="form-control" id="inputPassword4"/>
      </div>
      <div class="col-12">
        <label  for="inputAddress" class="form-label">Password</label>
        <input name={'password'} value={password} onChange={(e)=>handleInput('password',e.target.value)}  type="number" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form> */}