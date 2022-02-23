import { FaSearch } from "react-icons/all";
import { MdMovie } from "react-icons/all";
import { AiOutlineHome } from "react-icons/all";
import { BiTrendingUp } from "react-icons/all";
import { Link } from "react-router-dom";

const IconNav = ({ homeIconClicked, handleHomeClicked }) => {
  return (
    <>
     <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/lchannel" className="nav-link home-link">
          <AiOutlineHome className="homeIcon"/>
        </Link>
        <Link to="/trending" className="nav-link trending-link">
          <BiTrendingUp className="trendingIcon"/>
        </Link>
        <Link to="/movies" className="nav-link movies-link">
          <MdMovie className="moviesIcon"/>
        </Link>
        <Link to="/search" className="nav-link search-link">
          <FaSearch className="searchIcon"/>
        </Link>
      </li>
    </ul>
    </>
  );
};

export default IconNav;
