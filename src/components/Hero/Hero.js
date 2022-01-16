import { Section } from '../Section';
import styled from 'styled-components';
const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 1;
  text-transform: uppercase;
`;
export default function Hero() {
  return (
    <Section className="background1">
      <Title>Создание сайтов</Title>
    </Section>
  );
}
