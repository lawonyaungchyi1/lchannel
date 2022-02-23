import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import MainSlider from "./MainSlider";
import { HashLoader } from "react-spinners";
import TopSlider from "./TopSlider";
import GenreSlider from "./GenreSlider";


const Slider = ({ movies, api, moviesTrend, done  , popular  , family , science , animation , handleClicked , video}) => {

  const responsive = {
    0: { items: 1 },
    146: { items: 2 },
    292: { items: 3 },
    438: { items: 4 },
    584: { items: 5 },
    730: { items: 6 },
    876: { items: 7 },
    1028: { items: 7 },
  };

  return (
    <div className="slider-container">
      {!done ? (
        <div className="loader">
          <HashLoader />
        </div>
      ) : (
        <div>
          <TopSlider popular={popular} api={api} media={`movie`}/>
          <MainSlider
            responsive={responsive}
            movies={moviesTrend}
            api={api}
            text={`Now`}
            path={`/trending`}
            handleClicked={handleClicked}
            video={video}
          />
          <MainSlider
            responsive={responsive}
            movies={movies}
            api={api}
            text={`Movies`}
            path={`/movies`}
            video={video}
            handleClicked={handleClicked}
          />
          <GenreSlider
            responsive={responsive}
            movies={family}
            api={api}
            text={`Family`}
            path={`/family`}
            handleClicked={handleClicked}
            video={video}
          />
          <GenreSlider
            responsive={responsive}
            movies={science}
            api={api}
            text={`Science Fiction`}
            path={`/science-fiction`}
            handleClicked={handleClicked}
            video={video}
          />
          <GenreSlider
            responsive={responsive}
            movies={animation}
            api={api}
            text={`Animation`}
            path={`/animation`}
            handleClicked={handleClicked}
            video={video}
          />
          <div className="creator-section"><div>&copy;2021.All rights reserved.</div><div>Created By Nyan Lin Tun</div></div>
        </div>
      )}
    </div>
  );
};

export default Slider;
