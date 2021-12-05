import PropTypes from 'prop-types';

import styles from './SitePromotionPrice.module.scss';

let price = 0;

function onChangeValue(event) {
  price = event.target.value;
}

export default function SitePromotionPrice({ min, max, step = 1 }) {
  return (
    <>
      <div>
        <p>Цена</p>
        <p>{max} грн/мес</p>
      </div>
      <input
        className={styles.price}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChangeValue}
      />
      <button value={price} />
    </>
  );
}

SitePromotionPrice.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
};
