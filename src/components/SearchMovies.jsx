import { HashLoader } from "react-spinners";
import CardStyle from "./CardStyle";

const SearchMovies = ({
  movies,
  apiImage,
  media,
  done,
  handleClicked,
  video,
  clickedVideo,
}) => {
  return (
    <>
      {!done ? (
        <div className="loader-search">
          <HashLoader />
        </div>
      ) : (
        <CardStyle
          movies={movies}
          apiImage={apiImage}
          media={media}
          handleClicked={handleClicked}
          video={video}
          clickedVideo={clickedVideo}
        />
      )}
    </>
  );
};

export default SearchMovies;
