import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Movies from "./components/Movies";
import Trending from "./components/Trending";
import Series from "./components/Series";
import Search from "./components/Search";
import Genre from "./components/Genre";
import axios from "axios";
import {
  IMAGE_API,
  GET_GENRE_MOVIE,
  VIDEO_END,
  VIDEO_FRONT_MOV,
  GET_PAGE,
  SEARCH_MOVIE_API,
  SEARCH_TV_API,
  FEATURED_API,
  POPULAR,
  TRENDING_API,
  VIDEO_FRONT_TV,
} from "./Data/apiLinks";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [family, setFamily] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [science, setScience] = useState([]);
  const [video, setVideo] = useState([]);
  const [clickedVideo, setClickedVideo] = useState({});
  const [click, setClicked] = useState(false);
  const [homeIconClicked, setHomeIconClicked] = useState(false);
  const [movieDone, setMovieDone] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    const fetchData = async () => {
      await axios.get(FEATURED_API, signal).then((res) => {
        setMovies(res.data.results);
        setMovieDone(true);
      });
      await axios
        .get(TRENDING_API, signal)
        .then((res) => setTrending(res.data.results));
      await axios
        .get(POPULAR, signal)
        .then((res) => setPopular(res.data.results));
      await axios
        .get(GET_GENRE_MOVIE + 10751, signal)
        .then((res) => setFamily(res.data.results));
      await axios
        .get(GET_GENRE_MOVIE + 878, signal)
        .then((res) => setScience(res.data.results));
      await axios
        .get(GET_GENRE_MOVIE + 16, signal)
        .then((res) => setAnimation(res.data.results));
    };
    fetchData();

    return () => controller.abort();
  }, []);

  const handleClicked = () => {
    setClicked((prevState) => !prevState);
  };

  const handleGetValue = async (page) => {
    const controller = new AbortController();
    await axios
      .get(GET_PAGE + page, { signal: controller.signal })
      .then((res) => setMovies(res.data.results));
    setPageNumber(page);

    controller.abort();
  };

  const handledClicked = async (movie, media) => {
    setClickedVideo(movie);
    const controller = new AbortController();
    await axios
      .get(
        movie.media_type === "tv" || media === "Series"
          ? VIDEO_FRONT_TV + movie.id + VIDEO_END
          : VIDEO_FRONT_MOV + movie.id + VIDEO_END,
        { signal: controller.signal }
      )
      .then((res) => {
        setVideo(res.data.results[0] ? res.data.results[0].key : 1);
      });

    controller.abort();
  };

  const handleHomeClicked = (clicked) => {
    setHomeIconClicked(clicked);
  };

  return (
    <>
      <NavBar
        click={click}
        handleClicked={handleClicked}
        homeIconClicked={homeIconClicked}
        handleHomeClicked={handleHomeClicked}
      />
      <Routes>
        <Route
          path="/lchannel/*"
          element={
            <Slider
              done={movieDone}
              movies={movies}
              moviesTrend={trending}
              api={IMAGE_API}
              popular={popular}
              family={family}
              video={video}
              science={science}
              handleClicked={handledClicked}
              animation={animation}
            />
          }
        />
        <Route
          path="/movies/*"
          element={
            <Movies
              api={IMAGE_API}
              clickedVideo={clickedVideo}
              done={movieDone}
              movies={movies}
              handleClicked={handledClicked}
              video={video}
              handleGetValue={handleGetValue}
              pageNumber={pageNumber}
            />
          }
        />
        <Route
          path="/family"
          element={
            <Genre
              api={IMAGE_API}
              clickedVideo={clickedVideo}
              done={movieDone}
              movies={family}
              handleClicked={handledClicked}
              video={video}
              text={`Family`}
            />
          }
        />
        <Route
          path="/animation"
          element={
            <Genre
              api={IMAGE_API}
              clickedVideo={clickedVideo}
              done={movieDone}
              movies={animation}
              handleClicked={handledClicked}
              video={video}
              text={`Animation`}
            />
          }
        />
        <Route
          path="/science-fiction"
          element={
            <Genre
              api={IMAGE_API}
              clickedVideo={clickedVideo}
              done={movieDone}
              movies={science}
              handleClicked={handledClicked}
              video={video}
              text={`Science Fiction`}
            />
          }
        />
        <Route
          path="/trending"
          element={
            <Trending
              clickedVideo={clickedVideo}
              done={movieDone}
              movies={trending}
              apiImage={IMAGE_API}
              handleClicked={handledClicked}
              video={video}
            />
          }
        />
        <Route path="/series" element={<Series />} />
        <Route
          path="/search"
          element={
            <Search
              apiImage={IMAGE_API}
              clickedVideo={clickedVideo}
              handleClicked={handledClicked}
              video={video}
              apiMovie={SEARCH_MOVIE_API}
              apiTv={SEARCH_TV_API}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
