import React from 'react';
import { tariffs } from './Tariffs';
import TariffItem from './TariffItem';
import Button from '../Button/Button';
import { Section } from '../Section/Section';
import { Title } from '../Title/Title';
import s from './Tariff.module.scss';

const TariffList = ({ id, background }) => {
  return (
    <Section styles={s.section}>
      <Title name="Тарифы" styles={s.Sectiontitle} />
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
            <Button>{'Оставить заявку'}</Button>
            {/* <button type="submit" className={s.tariffButton}>
            Оставить заявку
          </button> */}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default TariffList;
