import PropTypes from "prop-types";

const NavButton = ({text}) => {
    return (
        <button className='btn'>{text}</button>
    )
}

NavButton.propTypes = {
    text: PropTypes.string,
}

export default NavButton