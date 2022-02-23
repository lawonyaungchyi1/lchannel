import { HashLoader } from "react-spinners";
import CardStyle from "./CardStyle";
import Pagination from "./Pagination";

const Movies = ({
  movies,
  api,
  done,
  handleClicked,
  clickedVideo,
  video,
  handleGetValue,
  pageNumber,
}) => {
  return (
    <div className="trending container">
      {!done ? (
        <div className="loader">
          <HashLoader />
        </div>
      ) : (
        <div>
          <div className="popular-title">Popular Movies</div>
          <div className="pagination-container">
            <Pagination
              handleGetValue={handleGetValue}
              pageNumber={pageNumber}
            />
          </div>
          <CardStyle
            apiImage={api}
            movies={movies}
            media={`Movie`}
            video={video}
            handleClicked={handleClicked}
            clickedVideo={clickedVideo}
          />
        </div>
      )}

      <div className="creator-section">
        <div>&copy;2021.All rights reserved.</div>
        <div>Created By Nyan Lin Tun</div>
      </div>
    </div>
  );
};

export default Movies;
