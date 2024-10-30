import styles from "../css/ProfilePage.module.css";
import React, { useState } from "react";
import axios from "axios";
import { FaBook, FaTshirt } from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";
import { useRef } from "react";
import { useEffect } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    file: null,
    color: "",
    size: "",
    name: "",
    description: "",
    category: "",
    condition: "",
    brand: "",
    model: "",
    use: "",
    ageRange: "",
    language: "",
    readingLevel: "",
    quantity: "",
  });

  const [selectedIcon, setSelectedIcon] = useState("books");
  const { addRequest, donor } = useGlobalContext();


  const handleIconClick = (icon, category) => {
    setSelectedIcon(icon);
    setFormData({ ...formData, category });
  };

  



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    form.append("donor", donor?.user?.name);
    addRequest(form);
    console.log(formData);
    // Reset form fields
    setFormData({
      file: null,
      color: "",
      size: "",
      name: "",
      description: "",
      category: selectedIcon,
      condition: "",
      brand: "",
      model: "",
      use: "",
      ageRange: "",
      language: "",
      readingLevel: "",
      quantity: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  useEffect(() => {
    const formContainer = document.getElementById("con");
    const btn = document.getElementById("sub-btn");
    if (selectedIcon === "toys") {
      formContainer.style.height = "600px";
      btn.style.top = "15px";
    } else if (selectedIcon === "home") {
      formContainer.style.height = "500px";
      btn.style.top = "50px";
    } else if (selectedIcon === "books") {
      formContainer.style.height = "500px";
      btn.style.top = "63px";
    }else if (selectedIcon === "clothes") {
      formContainer.style.height = "500px";
      btn.style.top = "55px";
    }else if (selectedIcon==="electronic"){
      btn.style.top = "52px";
    }

    
  }, [selectedIcon]);








 





  return (
    <div id="con" className={styles.container} >
  

      <div className={styles.navbar} >
        {/*BOOkS */}
        <div


          className={`${styles.navbarIcon} ${
            selectedIcon === "books" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("books", "Books")}
        >
          <FaBook />
        </div>

        {/*CLOTHES */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "clothes" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("clothes", "Clothing")}
        >
          <FaTshirt />
        </div>

        {/*electronic */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "electronic" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("electronic", "Electronics")}
        >
          <PiTelevisionFill />
        </div>

        {/*home */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "home" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("home", "Home Essentials")}
        >
          <FaHome />
        </div>

        {/*TOYS */}
        <div
          className={`${styles.navbarIcon} ${
            selectedIcon === "toys" ? styles.selected : ""
          }`}

        onClick={() => handleIconClick("toys", "Toys")}
        >
          <MdToys />
        </div>
        {/* another or naruto krkr*/}
      </div>

      <div className={styles.formContainer}>
        {/* BOOKS */}
        {selectedIcon === "books" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
        
            <div className={styles.formGroup}>
   
              <input
                type="file"
                id="item"
                name="file"
                accept="image/*"
                className={styles.inputFile}
                onChange={(e) =>
                  setFormData({ ...formData, file: e.target.files[0] })}
              />
            </div>


            <div className={styles.formGroup}>
        
              <input
                type="text"
                id="item"
                name="name"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>


            <div className={styles.formGroup}>
    
              <select
                id="language"
                name="language"
                className={styles.selectSearch}
                onChange={handleInputChange}
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
               
                {/* Add more languages as needed */}
              </select>
            </div>

            <div className={styles.formGroup}>

              <select
                id="level"
                name="level"
                className={styles.selectSearch}
                onChange={handleInputChange}
              >
                <option value="">Reading level:</option>
                <option value="english">child</option>
                <option value="spanish">teen</option>
                <option value="french">adult</option>
               
                {/* Add more languages as needed */}
              </select>
            </div>
      

            <div className={styles.formGroup}>

              <select id="condition" name="condition" className={styles.select}
                     onChange={handleInputChange}>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
         
              </select>
            </div>

            <input
            id="sub-btn"
              type="submit"
              value="Submit"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*CLOTHES */}
        {selectedIcon === "clothes" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
  
            <div className={styles.formGroup}>

              <input
                type="file"
                id="item"
                name="file"
                accept="image/*"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            
            <div className={styles.formGroup}>

              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>




            <select id="condition" name="condition" className={styles.select}
                     onChange={handleInputChange}>

<option value="" disabled selected hidden>
    Select a size
  </option>

                <option value="new">S</option>
                <option value="good">M</option>
                <option value="fair">L</option>
                <option value="poor">XL</option>
         
              </select>




            </div>
            <div className={styles.formGroup}>

              <div className={styles.colorPickerContainer}>
                <input
                  type="color"
                  id="color"
                  name="color"
                  className={styles.colorPicker}
                  onChange={handleInputChange}
                  placeholder="Color"
                  
                />

              </div>
            </div>
            <div className={styles.formGroup}>

              <select id="condition" name="condition" className={styles.select}  onChange={handleInputChange} >
              <option className={styles.place} value="" disabled selected hidden>
    Select The Condition 
  </option>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
               
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              id="sub-btn"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*TOY */}
        {selectedIcon === "toys" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
    
            <div className={styles.formGroup}>
           
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            
            <div className={styles.formGroup}>
         
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
   
              <input
              placeholder="Age Range"
                type="text"
                id="range"
                name="range"
                className={styles.inputField}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
           
              <input
              placeholder="Special Features"
                type="text"
                id="special"
                name="special"
                className={styles.inputField}
              />
            </div>


            <div className={styles.formGroup}>
              <input
                type="text"
                id="item"
                name="item"
              placeholder="usage"
                className={styles.inputFile}
               onChange={handleInputChange}
              />
            </div>


            <div className={styles.formGroup}>
    
              <input
              placeholder="Quantity"
                type="numper"
                id="item"
                name="item"
          
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>


            <div className={styles.formGroup}>

              
              <select id="condition" name="condition" className={styles.select}     onChange={handleInputChange}>
               <option value="" disabled selected hidden>Condition</option>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
            
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
              id="sub-btn"
            />
          </form>
        )}

        {/*electronic */}
        {selectedIcon === "electronic" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
        
            <div className={styles.formGroup}>
       
              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            
            <div className={styles.formGroup}>
 
              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>

              <input
              placeholder="the brand"
                type="text"
                id="brand"
                name="brand"
                className={styles.inputField}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>

              <input
              placeholder="The model"
                type="text"
                id="model"
                name="model"
                className={styles.inputField}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>

              <select id="condition" name="condition" className={styles.select}        onChange={handleInputChange} >
                <option value="" disabled selected hidden > The condition</option>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
         
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              id="sub-btn"
              className={styles.submitButton}
            />
          </form>
        )}

        {/*HOME */}
        {selectedIcon === "home" && (
          <form className={styles.bookForm} onSubmit={handleSubmit}>
      
            <div className={styles.formGroup}>

              <input
                type="file"
                id="item"
                name="item"
                accept="image/*"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            
            <div className={styles.formGroup}>

              <input
                type="text"
                id="item"
                name="item"
              placeholder="Enter the name of the item"
                className={styles.inputFile}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
 
              <input
              placeholder="USAGE"
                type="text"
                id="usage"
                name="usage"
                className={styles.inputField}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>

              <input
              placeholder="Special Features "
                type="text"
                id="special"
                name="special"
                className={styles.inputField}
              />
            </div>

            <div className={styles.formGroup}>

              <select id="condition" name="condition" className={styles.select}>
                <option value="" selected hidden disabled>Condition</option>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
                onChange={handleInputChange}
              </select>
            </div>

            <input
              type="submit"
              value="Submit"
              className={styles.submitButton}
              id="sub-btn"


            />

          </form>
        )}

        {/*looo need to add fghvhgvj*/}
      </div>
    </div>
  );
};

export default Form;
