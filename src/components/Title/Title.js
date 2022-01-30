import style from './Title.module.scss';

export function Title({ name, styles }) {
  const stylesTitle = styles ? styles : '';
  return <h2 className={`${style.title} ${stylesTitle}`}>{name}</h2>;
}
