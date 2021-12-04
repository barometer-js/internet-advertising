import PropTypes from 'prop-types';
import s from './ServiceCard.module.scss';
function ServiceCardItem({ number, description }) {
  return (
    <>
      <p className={s.number}>{number}</p>
      <p className={s.description}>{description}</p>
    </>
  );
}
ServiceCardItem.propTypes = {
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCardItem;
