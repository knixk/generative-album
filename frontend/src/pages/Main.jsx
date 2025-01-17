import React, { useContext, useEffect } from "react";
import Grid from "../components/Grid";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios  ";

function Main() {
  const myState = useContext(myContext);
  console.log("==========================>");
  console.log(myState);
  console.log("==========================>");

  // const {
  //   formData,
  //   setFormData,
  //   lastGeneratedImg,
  //   setLastGeneratedImg,
  //   submitDisabled,
  //   setSubmitDisabled,
  // } = myState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    const myAsyncFn = async () => {
      try {
        const data = await axios.post(
          "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
          {
            inputs:
              "Find serenity in the tranquil elegance of a solitary sailboat drifting on a glassy lake at sunset",
          },
          {
            headers: {
              "X-Rapidapi-Key":
                "cef7de3f42msh47f9ebffe210c03p10be64jsn0c9f66beeaaf",
              "X-Rapidapi-Host":
                "ai-text-to-image-generator-api.p.rapidapi.com",
              "Content-Type": "application/json",
            },
          }
        );

        console.log("======== im data =========>");
        console.log(data);
        console.log("======== im data =========>"); 
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  return (
    <div className="main__container">
      <Toaster />
      <form onSubmit={(e) => handleSubmit(e)} className="form__container">
        <input placeholder="Enter your name.." type="text" />
        <textarea placeholder="Enter your prompt.." type="text" />
        <button
          onClick={() => {
            toast("Please wait while we ready your creation...");

            setTimeout(() => {
              toast.success("Submitted!");
            }, 2000);
          }}
        >
          Submit
        </button>
      </form>

      {/* <Grid /> */}
    </div>
  );
}

export default Main;
