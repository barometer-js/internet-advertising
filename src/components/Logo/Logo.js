import { Icon } from '../Icon';
import { getStyles } from '../../layout/layout';
import styled from 'styled-components';

const HeaderIcon = styled.a`
  display: flex;
  align-items: end;
  .logo {
    width: 122px;
    height: 25px;
    fill: red;
  }
  p {
    font-weight: 500;
    font-size: 10px;
    line-height: 1;
    color: #333333;
    margin-left: 10px;
  }
`;

function HeaderLogo() {
  return (
    <div>
      <HeaderIcon>
        <Icon className="logo" iconName="logo" />
        <p>
          Интернет- <br /> агентство
        </p>
      </HeaderIcon>
    </div>
  );
}

export default HeaderLogo;
