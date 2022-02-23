import { HashLoader } from "react-spinners";
import CardStyle from "./CardStyle";

const SearchTvSeries = ({ movies, apiImage, media, done , handleClicked , clickedVideo , video }) => {
  return (
    <>
      {!done ? (
        <div className="loader-search">
          <HashLoader />
        </div>
      ) : (
        <CardStyle movies={movies} apiImage={apiImage} media={media} handleClicked={handleClicked} clickedVideo={clickedVideo} video={video}/>
      )}
    </>
  );
};

export default SearchTvSeries;
