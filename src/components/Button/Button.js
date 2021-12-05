import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ type = 'button', children, onClick, disabled }) => {
  const btnClass = disabled ? styles.disabled : styles.active;
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <button
      className={btnClass}
      type={type}
      disabled={disabled}
      onClick={onClickAction}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  shadow: false,
};

export default Button;
