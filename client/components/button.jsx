import React from 'react'; // import react module
import PropTypes from 'prop-types'; // import PropTypes module

// create our Button component as a functional component
const Button = (props) => {
  return (
    <input
      type="button"
      className={
        `${props.className} i-btn ${props.type === 'action' ? 'button action-button' : 'button input-button'}`
      }
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

// describe our expected props types
Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

// export our button component.
export default Button;
