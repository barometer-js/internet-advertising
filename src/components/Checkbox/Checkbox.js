import styles from './Checkbox.module.scss';
// import PropTypes from 'prop-types';

const Checkbox = props => (
  <input className={styles.checkbox} type="checkbox" {...props} />
);

// Checkbox.propTypes = {
//     props: PropTypes.node,
// };

export default Checkbox;
