import React, { useState } from "react";
import { Badge } from "@mui/material";
import poster from "../photos/2.png";
import poster1 from "../photos/poster1.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

const CardStyle = ({
  movies,
  apiImage,
  media,
  handleClicked,
  clickedVideo,
  video,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = (movie) => {
    handleClicked(movie, media);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="container searched">
      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-5 row-cols-lg-6">
        {movies.map((m) => (
          <div
            className="image-item card col"
            key={m.id}
            onClick={() => handleOpen(m)}
          >
            <Badge color="secondary" badgeContent={m.vote_average}>
              {/* <div className="skeleton"></div> */}
              <img
                src={m.poster_path ? apiImage + m.poster_path : poster}
                className="card-img-top"
                alt=""
              />
            </Badge>
            <h5 className="card-title">
              {m.original_name ? m.original_name : m.title}
            </h5>
            <div className="card-details">
              {m.media_type && (
                <span className="card-media">
                  {m.media_type === "tv"
                    ? `${m.media_type} Series`
                    : m.media_type}
                </span>
              )}
              {!m.media_type && <span className="card-media">{media}</span>}
              <span>
                {m.first_air_date ? m.first_air_date : m.release_date}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box-modal">
          <Typography id="modal-modal-description" className="flex modal-title">
            <span className="modal-title">
              {clickedVideo.title
                ? clickedVideo.title
                : clickedVideo.original_name}
            </span>
          </Typography>
          <div className="modal-image">
            <img
              src={
                clickedVideo.backdrop_path === null
                  ? poster1
                  : apiImage + clickedVideo.backdrop_path
              }
              className="image-one"
              alt=""
            />
            <img
              src={
                clickedVideo.poster_path === null
                  ? poster
                  : apiImage + clickedVideo.poster_path
              }
              className="image-two"
              alt=""
            />
          </div>
          <Typography id="modal-modal-title" className="modal-overview flex">
            <span>{clickedVideo.overview}</span>
          </Typography>
          <Typography
            id="modal-modal-title"
            className="youtube-link flex"
            // sx={{
            //   width: ["50", "100", "150", "200"],
            // }}
          >
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

export default CardStyle;
