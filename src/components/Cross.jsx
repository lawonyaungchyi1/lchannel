import IconNav from "./IconNav";

const Cross = ({ handleClicked , handleHomeClicked , homeIconClicked}) => {
  return (
    <>
      <nav
        className="responsive-container navigation-menu"
        onClick={handleClicked}
      >
      <IconNav handleHomeClicked={handleHomeClicked} homeIconClicked={homeIconClicked} />
      </nav>
    </>
  );
};

export default Cross;
