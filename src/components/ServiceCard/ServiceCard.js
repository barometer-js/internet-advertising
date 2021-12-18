import ServiceCardItem from './ServiceCardItem';
import { ServiceCardMarkup } from './ServiceCardMarkup';
import s from './ServiceCard.module.scss';

function ServiceCard() {
  return (
    <ul className={s.list}>
      {ServiceCardMarkup.map(item => (
        <li key={item.number} className={s.item}>
          <ServiceCardItem
            number={item.number}
            description={item.description}
            background={item.background}
          />
        </li>
      ))}
    </ul>
  );
}

export default ServiceCard;
