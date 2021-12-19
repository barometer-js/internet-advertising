import { Container } from './Container/Container';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  background-color: #333333;
  padding-right: 100px;
  padding-left: 100px;
`;
export function Section({ children }) {
  return (
    <SectionWrapper>
      <Container>{children}</Container>
    </SectionWrapper>
  );
}
