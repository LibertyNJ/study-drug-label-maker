import PropTypes from 'prop-types';
import React from 'react';
import SVGIcon from './SVGIcon';

const Button = props => {
  const className = `btn btn-${props.color} ${props.className}`;
  return (
    <button className={className} type={props.type}>
      {props.icon && (
        <React.Fragment>
          <SVGIcon
            className="align-baseline"
            type={props.icon}
            width="1em"
            height="1em"
            fill="white"
          />{' '}
        </React.Fragment>
      )}
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
