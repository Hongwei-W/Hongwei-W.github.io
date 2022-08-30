import PropTypes from "prop-types";

const NavButton = ({ text }) => {
  return (
    <button
      className="btn"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "#" + text;
      }}
    >
      {text}
    </button>
  );
};

NavButton.propTypes = {
  text: PropTypes.string,
};

export default NavButton;
