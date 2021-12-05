import { Container } from './Container/Container';
export function Section({ children, color }) {
  return (
    <section
      style={{
        backgroundColor: color,
        paddingRight: '100px',
        paddingLeft: '100px',
      }}
    >
      <Container>{children}</Container>
    </section>
  );
}
