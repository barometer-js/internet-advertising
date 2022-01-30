import { Container } from '../Container/Container';
import style from './Section.module.scss';

export function Section({ children, styles }) {
  const stylesSection = styles ? styles : '';
  return (
    <section className={`${style.section} ${stylesSection}`}>
      <Container>{children}</Container>
    </section>
  );
}
