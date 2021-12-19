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

//   .background1 {
//     background-image:
//  linear - gradient (#00000033, #00000033),
//       url('../../images/backgroundHero1x.png');
//   }

export default function Hero() {
  return (
    <Section className="background1">
      <Title>Создание сайтов</Title>
    </Section>
  );
}
