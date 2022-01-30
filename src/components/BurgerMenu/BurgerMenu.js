import { slide as Menu } from 'react-burger-menu';
import styles from './BurgerMenu.module.scss';
import HeaderContacts from '../Contacts/HeaderContacts';
function BurgerMenu() {
  return (
    <Menu className={`${styles.navMenuBurger}`} styles={stylesMenu}>
      <a href="/" id="sales" className="menu-item">
        Акции
      </a>
      <a href="/" id="about" className="menu-item">
        О компании
      </a>
      <a href="/" id="contact" className="menu-item">
        Контакты
      </a>
      <HeaderContacts className="menu-item" />
    </Menu>
  );
}
export default BurgerMenu;

var stylesMenu = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
