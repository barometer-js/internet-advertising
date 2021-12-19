import SiteCardsList from './SiteCardsList';
import styles from './SiteCards.module.scss';

export default function SiteCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Портфолио сайтов</h2>
        <SiteCardsList />
      </div>
    </section>
  );
}
