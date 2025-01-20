import React, { useContext, useEffect, useState } from "react";
import Grid from "../components/Grid";
// import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

// send the data on port - sender --------
import io from "socket.io-client";
const socket = io("http://localhost:3000");

function submitData(payload) {
  socket.emit("new-image", payload); // Send image to server
}

function Main() {
  // const myState = useContext(myContext);
  console.log("==========================>");
  // console.log(myState.formData);
  console.log("==========================>");
  // ---- send this prompt to the api
  const [name, setName] = useState();
  const [prompt, setPrompt] = useState();
  // ---- send this img to backend socket
  const [img, setImg] = useState();

  // const {
  //   formData,
  //   setFormData,
  //   lastGeneratedImg,
  //   setLastGeneratedImg,
  //   submitDisabled,
  //   setSubmitDisabled,
  // } = myState;

  // const fetchImage = async () => {
  //   const url =
  //     "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic";
  //   const headers = {
  //     "X-Rapidapi-Key": "cef7de3f42msh47f9ebffe210c03p10be64jsn0c9f66beeaaf",
  //     "X-Rapidapi-Host": "ai-text-to-image-generator-api.p.rapidapi.com",
  //     "Content-Type": "application/json",
  //   };
  //   const data = {
  //     inputs:
  //       "Find serenity in the tranquil elegance of a solitary sailboat drifting on a glassy lake at sunset",
  //   };

  //   try {
  //     const response = await axios.post(url, data, { headers });
  //     console.log(response.data); // Handle the response as needed
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const myAsyncFn = async () => {
    try {
      const data = await axios.post(
        "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
        {
          inputs:
            prompt,
        },
        {
          headers: {
            "X-Rapidapi-Key":
              "cef7de3f42msh47f9ebffe210c03p10be64jsn0c9f66beeaaf",
            "X-Rapidapi-Host": "ai-text-to-image-generator-api.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("======== im data =========>");
      console.log(data.data.url);
      setImg(data.data.url);
      console.log("======== im data =========>");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    // fetchImage();
    // await myAsyncFn();

    // img && submitData(img);
    const myPayload = {
      name: name,
      image: img,
    };

    // only and only if the image is present then we make this call..
    submitData(myPayload);

    console.log(myPayload)

    //  ------ submit the iamge here.
    // submitData("link")
  };

  useEffect(() => {}, []);

  return (
    <div className="main__container">
      <Toaster />
      <form onSubmit={(e) => handleSubmit(e)} className="form__container">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name.."
          type="text"
        />
        <textarea placeholder="Enter your prompt.." type="text" />
        <button
          onClick={() => {
            toast("Please wait while we ready your creation...");

            setTimeout(() => {
              toast.success("Done!");
            }, 4000);
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
