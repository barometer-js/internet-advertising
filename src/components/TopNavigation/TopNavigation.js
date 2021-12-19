import HeaderContacts from '../Contacts/HeaderContacts';
import styled from 'styled-components';
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    justify-content: baseline;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #333333;
    a {
      color: inherit;
      padding-top: 18px;
      padding-bottom: 18px;
      display: inline-block;
    }
  }
  li:not(:last-child):after {
    content: '/';
    margin-left: 25px;
    margin-right: 25px;
    display: block;
  }
`;

function TopNavigation() {
  return (
    <NavWrapper>
      <nav>
        <NavList>
          <li>
            <a href="/">Акции</a>
          </li>
          <li>
            <a href="/">О компании</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </NavList>
      </nav>
      <HeaderContacts />
    </NavWrapper>
  );
}

export default TopNavigation;
