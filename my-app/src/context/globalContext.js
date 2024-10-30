import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = 'http://localhost:5555/';

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {


    const [users, setUsers] = useState([])
    const [leaders, setLeaders] = useState([])
    const [volunteers, setVolunters] = useState([])
    const [requests,setRequests]=useState([])
    const[details,setDetails]=useState([])
    const[Donation,setDonation]=useState([])

    const [volu, setVolu] = useState([])
    const [error, setError] = useState(null)

    const[needy,setNeedy]= useState([])

    const[clothing,setClothing]= useState([])
    const[electronics,setElectronics]= useState([])
    const[HomeEssential,setHomeEssential]= useState([])
    const[books,setbooks]= useState([])
    const[toys,setToys]= useState([])


    const [Bookssss,setBookssss]=useState([]);
//***************************************users******************************************************

    const addUser = async (user) => {
        const response = await axios.post(`${BASE_URL}books`, user)
        console.log("Add")
            // .catch((err) =>{
            //     setError(err.response.data.message)
            // })
        getUsers()
    }

    const getUsers = async () => {
        const response = await axios.get(`${BASE_URL}books`)
         setUsers(response.data)
        console.log(response.data)
        console.log("Get")
    }

    const deleteUser = async (id) => {
        
        const res  = await axios.delete(`${BASE_URL}books/${id}`)
        console.log("Delete")
        getUsers()
    }

    const updateUser = async (id,updatedUser)=>{
        const res = await axios.put(`${BASE_URL}books/${id}`,updatedUser)
        console.log("Update")
        getUsers()
    }




//************************************leaders*********************************************************

const addLeader = async (Leader) => {
    const response = await axios.post(`${BASE_URL}leaders`, Leader)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getLeaders()
}

const getLeaders = async () => {
    const response = await axios.get(`${BASE_URL}leaders`)
    setLeaders(response.data)
    console.log(response.data)
}

const deleteLeaders = async (id) => {
    const res  = await axios.delete(`${BASE_URL}leaders/${id}`)
    getLeaders()
}

const updateLeader = async (id,updatedLeader)=>{
    const res = await axios.put(`${BASE_URL}leaders/${id}`,updatedLeader)
    getLeaders()
}

const remove=async (id,updatedLeader)=>{
    const res = await axios.delete(`${BASE_URL}leaders/remove/${id}`,updatedLeader)
    getLeaders()
}


const showVolunteer = (data)=>{
    setVolu(data)
}


//*********************************Volunteers********************************************************

const addVolunteer = async (Volunteer) => {
    const response = await axios.post(`${BASE_URL}volunteers`, Volunteer)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getvolunteers()
}

const getvolunteers = async () => {
    const response = await axios.get(`${BASE_URL}volunteers`)
    setVolunters(response.data.data)
    console.log(response.data)
}

const deleteVolunteer = async (id) => {
    const res  = await axios.delete(`${BASE_URL}volunteers/${id}`)
    getvolunteers()
}

const updateVolunteer = async (id,updatedVolunteer)=>{
    const res = await axios.put(`${BASE_URL}volunteers/${id}`,updatedVolunteer)
    console.log("update")
    getvolunteers()
}

//********************************** Requests ********************************************************/

const addRequest = async (request) => {
    const response = await axios.post(`${BASE_URL}Rdonation`, request)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getRequests()
}

const getRequests = async () => {
    const response = await axios.get(`${BASE_URL}Rdonation`)
    setRequests(response.data.data)
    console.log(response.data)
}


const deleteRequest = async (id) => {
    const res  = await axios.delete(`${BASE_URL}Rdonation/${id}`)
    getRequests()
}

const updateRequest = async (id,updatedRequest)=>{
    const res = await axios.put(`${BASE_URL}Rdonation/${id}`,updatedRequest)
    console.log("update")
    getRequests()
}

/************************Donation********************************************************/


const addDonation = async (request) => {
    const response = await axios.post(`${BASE_URL}Cdonation`, request)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getDonation()
    getClothing()
    getElectronics()
    getToys()
    getBooks()
    HomeEssentials()
}

const getDonation = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation`)
    setDonation(response.data.data)
    console.log(response.data)
}

const getClothing = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Clothing`)
    setClothing(response.data.data)
    console.log(response.data)

}

const getElectronics = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Electronics`)
    setElectronics(response.data.data)
    console.log(response.data)
}

const getToys = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Toys`)
    setToys(response.data.data)
    console.log(response.data)
}

const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/Books`)
    setbooks(response.data.data)
    console.log(response.data)
}


const HomeEssentials  = async () => {
    const response = await axios.get(`${BASE_URL}Cdonation/getCategory/HomeEssentials`)
    setHomeEssential(response.data.data)
    console.log(response.data)
}




const deleteDonation = async (id) => {
    const res  = await axios.delete(`${BASE_URL}Cdonation/${id}`)
   
    getClothing()
    getElectronics()
    getToys()
    getBooks()
    HomeEssentials()
    getDonation()}

const updateDonation = async (id,updatedRequest)=>{
    const res = await axios.put(`${BASE_URL}Cdonation/${id}`,updatedRequest)
    console.log("update")
    getDonation()
    getClothing()
    getElectronics()
    getToys()
    getBooks()
    HomeEssentials()
}



/********************************needy*********************************************/


const addNeedy = async (user) => {
    const response = await axios.post(`${BASE_URL}needy`, user)
    console.log("Add")
        // .catch((err) =>{
        //     setError(err.response.data.message)
        // })
        getNeedy()
}

const getNeedy = async () => {
    const response = await axios.get(`${BASE_URL}needy`)
     setNeedy(response.data)
    console.log(response.data)
    console.log("Get")
}

const deleteNeedy = async (id) => {
    
    const res  = await axios.delete(`${BASE_URL}needy/${id}`)
    console.log("Delete")
    getNeedy()
}

const updateNeedy = async (id,updatedUser)=>{
    const res = await axios.put(`${BASE_URL}needy/${id}`,updatedUser)
    console.log("Update")
    getNeedy()
}

/*******************Booksss********************* */
const getBookssss = async () => {
  
        try {
            const res = await axios.get(`http://localhost:5555/Booksss`);
            console.log(res)
            setBookssss(res.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
};



const deleteBook=async(id)=>{
    await axios.delete(`http://localhost:5555/Booksss/${id}`)
    getBookssss();
}











    return (
        <GlobalContext.Provider value={{
            
            users,
            addUser,
            getUsers,
            updateUser,
            deleteUser,

            leaders,
            addLeader,
            getLeaders,
            updateLeader,
            deleteLeaders,
            showVolunteer,
            volu,
            remove,
            setVolu,

            volunteers,
            addVolunteer,
            getvolunteers,
            updateVolunteer,
            deleteVolunteer,

            requests,
            addRequest,
            getRequests,
            deleteRequest,
            updateRequest,
            setDetails,
            details,



            addDonation,
            getDonation,
            deleteDonation,
            updateDonation,
            getClothing,
            getElectronics,
            getToys,
            getBooks,
            HomeEssentials,
            Donation,
            clothing,
            electronics,
            HomeEssential,
            books,
            toys,



            addNeedy,
            getNeedy,
            updateNeedy,
            deleteNeedy,
            needy,


            getBookssss,
            deleteBook,
            Bookssss,
            setBookssss,

            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )



}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}