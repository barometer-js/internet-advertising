import styles from './Checkbox.module.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange }) => (
  <input
    className={styles.checkbox}
    type="checkbox"
    checked={checked}
    onChange={onChange}
  />
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
