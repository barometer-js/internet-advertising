import s from './Tariff.module.scss';

function TariffItem({ title, image, description, price }) {
  return (
    <>
      <h4 className={s.title}>{title}</h4>
      <img
        className={s.picture}
        src={image}
        alt={title}
        width="115"
        height="115"
      />
      <p className={s.text}>{description}</p>
      <p className={s.price}>
        {price} <span className={s.priceСurrency}>руб</span>
      </p>
    </>
  );
}
export default TariffItem;
