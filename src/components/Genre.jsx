import { HashLoader } from "react-spinners";
import CardStyle from "./CardStyle";

const Genre = ({
  movies,
  api,
  done,
  handleClicked,
  clickedVideo,
  video,
  text,
}) => {
  return (
    <div className="trending container">
      {!done ? (
        <div className="loader">
          <HashLoader />
        </div>
      ) : (
        <div>
          <div className="popular-title">{text}</div>
          <CardStyle
            apiImage={api}
            movies={movies}
            media={`Movie`}
            video={video}
            handleClicked={handleClicked}
            clickedVideo={clickedVideo}
          />
          <div className="creator-section">
            <div>&copy;2021.All rights reserved.</div>
            <div>Created By Nyan Lin Tun</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Genre;
