import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alertcss from "./Alert.css";

const Alertt = ({ book, onClose }) => {
  console.log(book);

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
      }}
    >
      <FontAwesomeIcon
        style={{
          position: "relative",
          display: "flex",
          left: "470px",
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
          width: "90px",
          marginLeft: "195px",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <span>${book._id}</span>
        <span>{book.name}</span>
        <span>{book.email}</span>
        <span>{book.password}</span>
      </div>
    </div>
  );
};

export default Alertt;
