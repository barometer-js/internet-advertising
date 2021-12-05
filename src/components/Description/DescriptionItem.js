import PropTypes from 'prop-types';
import s from './DescriptionItem.module.scss';
function DescriptionItem({ userImg, title, description }) {
  return (
    <>
      <img className={s.userImg} src={userImg} alt="user"></img>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </>
  );
}
DescriptionItem.propTypes = {
  userImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DescriptionItem;
