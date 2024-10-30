import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
export default function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);


const{Bookssss,requests}=useGlobalContext();

  const handleButtonHover = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="side-bar">
           <NavLink
        to="Books"
        className={`item-link ${activeButton === 7 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(7)}
      >
        Books <div className="notification" >{Bookssss.length}</div>
      </NavLink>
      <NavLink
        to="Users"
        className={`item-link ${activeButton === 1 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(1)}
      >
        Donars
      </NavLink>

      <NavLink
        className={`item-link ${activeButton === 2 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(2)}
        to="leader "
      >
        Leaders
      </NavLink>

      <NavLink
        to="volunteers "
        className={`item-link ${activeButton === 3 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(3)}
      >
        Volunteers
      </NavLink>
      <NavLink
        to="donations "
        className={`item-link ${activeButton === 4 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(4)}
      >
        Donations
      </NavLink>
      <NavLink
        to="request "
        className={`item-link ${activeButton === 5 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(5)}
      >
        Requests  <div className="notification" >{requests.length}</div>
      </NavLink>
      <NavLink
        to="needy "
        className={`item-link ${activeButton === 6 ? "item-link_hover" : ""}`}
        onClick={() => handleButtonHover(6)}
      >
        needy
      </NavLink>


    </div>
  );
}
