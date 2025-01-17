import React, { useContext } from "react";
import Grid from "../components/Grid";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Toaster, notify } from "react-hot-toast";

function Main() {
  const myState = useContext(myContext);
  console.log("==========================>");
  console.log(myState);
  console.log("==========================>");

  // const { formData, setFormData } = myState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="main__container">
      <form onSubmit={(e) => handleSubmit(e)} className="form__container">
        <input placeholder="Enter your name.." type="text" />
        <input placeholder="Second prompt" type="text" />
        <input placeholder="Third prompt" type="text" />
        <button>Submit</button>
      </form>

      {/* <Grid /> */}
    </div>
  );
}

export default Main;
