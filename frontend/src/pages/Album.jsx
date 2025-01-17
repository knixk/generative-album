import React from "react";

import img from "../assets/img.webp";

// --- replace this with real data
const data = [
  {
    id: "1231d2",
    img: img,
    name: "Kanishk Shrivastava",
  },
  {
    id: "12asd32312",
    img: "https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg",
    name: "Tanishk Shrivastava",
  },
  {
    id: "123sda12",
    img: "https://cdn.pixabay.com/photo/2023/03/11/22/21/ai-generated-7845461_640.jpg",
    name: "Ayush Rana",
  },
  {
    id: "12312312",
    img: "https://cdn.pixabay.com/photo/2023/01/26/22/13/ai-generated-7747149_1280.jpg",
    name: "Saniya Sultana",
  },
];

function Album() {
  return (
    <div className="album__container">
      {/* <p>Your lovely creations..</p> */}
      <div className="album__grid">
        {data.map((i) => {
          return (
            <div className="card__container">
              <img className="generated__img" src={i.img} alt={i.name} />
              <p className="name">{i.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
