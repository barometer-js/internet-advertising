import styles from './SiteCards.module.scss';

export default function SiteCardsItem({
  urlWebp,
  urlImg,
  title,
  link,
  description,
}) {
  return (
    <>
      <picture>
        <source srcSet={urlWebp} type="images/webp" />
        <source srcSet={urlImg} />
        <img src={urlImg} alt={title} width="190" height="258" />
      </picture>
      <h3 className={styles.description}>{description}</h3>
      <a href="." className={styles.link}>
        {link}
      </a>
    </>
  );
}
