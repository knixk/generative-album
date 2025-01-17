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
  {
    id: "12312312",
    img: "https://img.freepik.com/premium-photo/generative-ai-image-victoria-majestic-waterfall-with-rock-stone-cliff-nature-rainbow-wallpaper_467541-15025.jpg",
    name: "Kavya Maurya",
  },
  {
    id: "12312312",
    img: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/268c4b03-533f-4e81-aec1-0c22df466a90/2e6a3dd3-e59f-445e-b998-1c03afd15b3e.png",
    name: "Ajay Sisodiya",
  },
  {
    id: "12312312",
    img: "https://as2.ftcdn.net/jpg/05/36/62/97/1000_F_536629702_9FkGvzElExv4TpJwr5S03yJHdS3hADR6.jpg",
    name: "Arun Gehlot",
  },
  {
    id: "12312312",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69EWR5a90jYQWOYu8vdbbzLasqQNWHhyVnA&s",
    name: "Priyanka Sharma",
  },
  {
    id: "123sda212312",
    img: "https://imgv3.fotor.com/images/gallery/a-3d-girl-cartoon-character-generated-by-cartoon-character-maker-in-Fotor.jpg",
    name: "Om Sharma",
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
