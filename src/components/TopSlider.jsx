import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import poster from "../photos/2.png";
import poster1 from "../photos/poster1.png";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IoLogoYoutube } from "react-icons/all";
import axios from "axios";

const VIDEO_FRONT_MOV = `https://api.themoviedb.org/3/movie/`;
const VIDEO_FRONT_TV = `https://api.themoviedb.org/3/tv/`;
const VIDEO_END = "/videos?api_key=ba2c4197571d8407367a5829442834fa";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#f50057",
    maxWidth: 600,
    color: "white",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f50066",
      color: "white",
    },
  },
});

const responsive = {
  100: { items: 1 },
};

const TopSlider = (popular, api, media) => {
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState();

  const fetchVideo = async (movie) => {
    const controller = new AbortController();
    await axios
      .get(
        movie.media_type === "tv" || media === "Series"
          ? VIDEO_FRONT_TV + movie.id + VIDEO_END
          : VIDEO_FRONT_MOV + movie.id + VIDEO_END,
        { signal: controller.signal }
      )
      .then((res) =>
        setVideo(res.data.results[0] ? res.data.results[0].key : 1)
      );

    controller.abort();
  };
  const handleOpen = async (movie) => {
    fetchVideo(movie);
    setMovie(movie);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div className="top-slider">
      <AliceCarousel
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        disableSlideInfo
        mouseTracking
        autoPlay
        autoPlayInterval={2000}
        infinite
        responsive={responsive}
        render
      >
        {popular.popular.map((m) => {
          const release_date = m.release_date.slice(0, 4);
          return (
            <div
              className="image-slider-top"
              onClick={() => handleOpen(m)}
              key={m.id}
              style={{
                backgroundImage: `url(${popular.api + m.backdrop_path})`,
                backgroundSize: "cover",
                opacity: 0.7,
              }}
            >
              <div className="movie-details-top">
                <div className="slider-box">
                  <img
                    className="item-image-top"
                    src={popular.api + m.poster_path}
                    alt="backgroundImage"
                  />
                  <div className="details-slider">
                    <h5 className="slider-top-title">{`${m.title}(${release_date})`}</h5>
                    <span className="rating">Rating : {m.vote_average}</span>
                    <span className="date">Release : {m.release_date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </AliceCarousel>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box-modal">
          <Typography id="modal-modal-description" className="flex modal-title">
            <span className="modal-title">
              {movie.title ? movie.title : movie.original_name}
            </span>
          </Typography>
          <div className="modal-image">
            <img
              src={
                movie.backdrop_path === null
                  ? poster1
                  : popular.api + movie.backdrop_path
              }
              className="image-one"
              alt=""
            />
            <img
              src={
                movie.poster_path === null
                  ? poster
                  : popular.api + movie.poster_path
              }
              className="image-two"
              alt=""
            />
          </div>
          <Typography id="modal-modal-title" className="modal-overview flex">
            <span>{movie.overview}</span>
          </Typography>
          <Typography id="modal-modal-title" className="youtube-link flex">
            <Button
              variant="contained"
              className={`${classes.btn} btn-modal`}
              href={`https://www.youtube.com/watch?v=${video}`}
            >
              <IoLogoYoutube className="youtube-logo" />
              <span>Watch the trailer</span>
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TopSlider;
