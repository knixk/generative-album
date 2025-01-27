import React, { useContext } from "react";
import Grid from "../components/Grid";
import { myContext } from "../App";

function Main() {
  const myState = useContext(myContext);
  console.log(myState);

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
