import React from 'react';
import { tariffs } from './Tariffs';
import TariffItem from './TariffItem';
import s from './Tariff.module.scss';

const TariffList = ({ id, background }) => {
  return (
    <ul className={s.tariffList}>
      {tariffs.map(tariff => (
        <li
          key={tariff.id}
          style={{ background: tariff.background }}
          className={s.tariffItem}
        >
          <TariffItem
            title={tariff.title}
            image={tariff.image.default}
            description={tariff.description}
            price={tariff.price}
          />
          <button type="submit" className={s.tariffButton}>
            Оставить заявку
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TariffList;
