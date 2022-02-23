import React from "react";
import { HashLoader } from "react-spinners";
import CardStyle from "./CardStyle";

const Trending = ({ movies, done, apiImage , clickedVideo ,video , handleClicked }) => {
  return (
    <>
      {!done ? (
        <div className="loader">
          <HashLoader />
        </div>
      ) : (
        <div className="trending-all-movies container">
          <div className="popular-title">Popular Now</div>
          <CardStyle apiImage={apiImage} movies={movies} media={`Movie`} video={video} handleClicked={handleClicked} clickedVideo={clickedVideo}/>
          <div className="creator-section"><div>&copy;2021.All rights reserved.</div><div>Created By Nyan Lin Tun</div></div>
        </div>
      )}
    </>
  );
};

export default Trending;
