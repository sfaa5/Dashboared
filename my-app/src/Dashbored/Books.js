import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import ItemDonation from "../component/ItemDonation";
import BookItem from "../component/BookItem";
import axios from "axios";
export default function Books(){

const{getBookssss,Bookssss}=useGlobalContext();
const [donation,setdonations]=useState([]);


// useEffect(() => {
//     const fetchBooks = async () => {
//         await getBookssss();
//         if (Array.isArray(Bookssss)) {
//             setdonations(Bookssss);
//         } else {
//             console.error("Bookssss is not an array:", Bookssss);
//         }
//         console.log(Bookssss);
//     };
//     fetchBooks();
// }, [getBookssss]);

useEffect(() => {
    const fetchBooks = async () => {
        await getBookssss();
    };
    fetchBooks();
}, []);

useEffect(() => {
    if (Array.isArray(Bookssss)) {
        setdonations(Bookssss);
    } else {
        console.error("Bookssss is not an array:", Bookssss);
    }
    console.log(Bookssss);
    console.log(donation);
}, [Bookssss]);

return(
    <div className="rSide">
<div className="tablee">
            <table>
                <thead>
                    <tr>
                    <th>
                        Img
                    </th>
                    <th>
                        Item
                    </th>
                    <th>
                        Dsc
                    </th>
                    <th>
                        Donar
                    </th>
                    <th>
                        Volunteer
                    </th>
                    <th>
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                {donation.map((don)=>(

                    <BookItem setdonations={setdonations}   request={don}/>
                ))}
                </tbody>
            </table>
 
     
        </div>



        </div>
    );

}