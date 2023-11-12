import React from "react";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-bold">Leo</h1>
      <p className="py-6 text-lg w-1/4 text-justify">
        Leo is a 2023 Indian film about Parthiban, an animal rescuer and cafe
        owner in Theog, who is pursued by gangsters who suspect him to be
        Antony's estranged son, Leo.  It was directed by Lokesh Kanagaraj and stars
        Vijay, Trisha, Sanjay Dutt, Gautham Menon, and Arjun Sarja.
      </p>
      <div>
        <button className="bg-white text-black p-4  px-14 text-lg  rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white p-4  px-12 text-lg bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
