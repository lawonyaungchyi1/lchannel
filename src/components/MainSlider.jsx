import React, { useState } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { FaArrowAltCircleRight } from "react-icons/all";
import "react-alice-carousel/lib/alice-carousel.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import poster from "../photos/2.png";
import poster1 from "../photos/poster1.png";
import { Button } from "@mui/material";
import { IoLogoYoutube } from "react-icons/all";
import { makeStyles } from "@mui/styles";
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

const MainSlider = ({
  api,
  movies,
  responsive,
  text,
  path,
  video,
  handleClicked,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const handleOpen = (movie) => {
    setClickedMovie(movie);
    handleClicked(movie);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="slider">
        <div className="slider-top">
          <h4 className="title-popular">Popular {text}</h4>
          <Link className="see-all" to={path}>
            See all
            <FaArrowAltCircleRight />
          </Link>
        </div>
        <AliceCarousel
          animationDuration={1000}
          disableDotsControls
          disableButtonsControls
          disableSlideInfo
          mouseTracking
          autoPlay
          autoPlayInterval={3000}
          infinite
          responsive={responsive}
          render
        >
          {movies.map((m) => {
            return (
              <div
                className="image-slider"
                key={m.poster_path}
                onClick={() => handleOpen(m)}
              >
                <img
                  className="item-image"
                  src={api + m.poster_path}
                  alt="one"
                />
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
            <Typography
              id="modal-modal-description"
              className="flex modal-title"
            >
              <span className="modal-title">
                {clickedMovie.title
                  ? clickedMovie.title
                  : clickedMovie.original_name}
              </span>
            </Typography>
            <div className="modal-image">
              <img
                src={
                  clickedMovie.backdrop_path === null
                    ? poster1
                    : api + clickedMovie.backdrop_path
                }
                className="image-one"
                alt=""
              />
              <img
                src={
                  clickedMovie.poster_path === null
                    ? poster
                    : api + clickedMovie.poster_path
                }
                className="image-two"
                alt=""
              />
            </div>
            <Typography id="modal-modal-title" className="modal-overview flex">
              <span>{clickedMovie.overview}</span>
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
    </>
  );
};

export default MainSlider;
