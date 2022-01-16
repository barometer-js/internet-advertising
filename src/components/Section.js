import { Container } from './Container/Container';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  background-color: #333333;
  padding-right: 100px;
  padding-left: 100px;
  .background1 {
    background-image: linear-gradient(#00000033, #00000033),
      url('../../images/backgroundHero1x.png');
  }
`;
export function Section({ children }) {
  return (
    <SectionWrapper>
      <Container>{children}</Container>
    </SectionWrapper>
  );
}
