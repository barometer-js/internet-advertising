import PropTypes from 'prop-types';
import manImg from '../../images/man.png';
import s from './DescriptionItem.module.scss';
function DescriptionItem({ title, description }) {
  return (
    <li className={s.item}>
      <img className={s.manImg} src={manImg} alt="man"></img>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </li>
  );
}
DescriptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DescriptionItem;
