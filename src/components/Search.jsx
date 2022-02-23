import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchMovies from "./SearchMovies";
import SearchTvSeries from "./SearchTvSeries";

const Search = ({
  apiImage,
  apiMovie,
  apiTv,
  handleClicked,
  video,
  clickedVideo,
  videoForSearch,
}) => {
  const [toggleTag, setToggleTag] = useState();
  const [searchDone, setSearchDone] = useState(false);
  const [searchItem, setSearchItem] = useState("superman");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedSeries, setSearchedSeries] = useState([]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    await axios
      .get(apiMovie + searchItem, { signal: controller.signal })
      .then((res) => {
        setSearchedMovies(res.data.results);
        setToggleTag(1);
        setSearchDone(true);
      });
    await axios
      .get(apiTv + searchItem, { signal: controller.signal })
      .then((res) => {
        setSearchedSeries(res.data.results);
      });

    controller.abort();
  };

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleToggle = (index) => {
    setToggleTag(index);
  };
  return (
    <>
      <div className="search-container container">
        <form action="" onSubmit={handleOnSubmit} className="form-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchItem}
            onChange={handleOnChange}
            required
            autoFocus
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon nav-icon" />
          </button>
        </form>
        <div className="block-tabs">
          <div
            className={toggleTag === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => handleToggle(1)}
          >
            SEARCH MOVIES
          </div>
          <div
            className={toggleTag === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => handleToggle(2)}
          >
            SEARCH TV SERIES
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={toggleTag === 1 ? "content active-content" : "content"}
          >
            <SearchMovies
              done={searchDone}
              movies={searchedMovies}
              apiImage={apiImage}
              media={`Movie`}
              handleClicked={handleClicked}
              clickedVideo={clickedVideo}
              video={video}
            />
          </div>
          <div
            className={toggleTag === 2 ? "content active-content" : "content"}
          >
            <SearchTvSeries
              done={searchDone}
              movies={searchedSeries}
              apiImage={apiImage}
              handleClicked={handleClicked}
              clickedVideo={clickedVideo}
              video={video}
              videoForSearch={videoForSearch}
              media={`Series`}
            />
          </div>
        </div>
        <div className="creator-section">
          <div>&copy;2021.All rights reserved.</div>
          <div>Created By Nyan Lin Tun</div>
        </div>
      </div>
    </>
  );
};

export default Search;
