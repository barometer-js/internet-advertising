import { siteCardsMarkup } from './SiteCardsMarkup';
import SiteCardsItem from './SiteCardsItem';
import styles from './SiteCards.module.scss';

export default function SiteCardsList() {
  return (
    <ul className={styles.list}>
      {siteCardsMarkup.map(card => (
        <li key={card.title} className={styles.item}>
          <SiteCardsItem
            urlWebp={card.urlWebp}
            urlImg={card.urlImg}
            titel={card.title}
            link={card.link}
            description={card.description}
          />
        </li>
      ))}
    </ul>
  );
}
