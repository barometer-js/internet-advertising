import { Icon } from '../Icon';
import { getStyles } from '../../layout/layout';
import styled from 'styled-components';
const styles = getStyles();
const HeaderContact = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;

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
      text-decoration: underline;
      font-weight: 700;
      font-size: 18px;
    }
  }
  .iconWhatsapp {
    margin-right: 6px;
  }
  .iconViber {
    margin-right: 12px;
  }
`;
function HeaderContacts() {
  return (
    <div>
      <HeaderContact>
        <li className="iconWhatsapp">
          <a href="https://wa.me/384441231718">
            <Icon iconName="whatsapp" color={styles.whatsappColor} />
          </a>
        </li>
        <li className="iconViber">
          <a href="viber://chat?number=+384441231718">
            <Icon iconName="viber" color={styles.viberColor} />
          </a>
        </li>
        <li>
          <a href=" tel:+384441231718">8 (444) 123-17-18</a>
        </li>
      </HeaderContact>
    </div>
  );
}

export default HeaderContacts;
