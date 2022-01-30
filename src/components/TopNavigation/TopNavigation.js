import { useRef } from 'react';
import HeaderContacts from '../Contacts/HeaderContacts';
import HeaderLogo from '../Logo/Logo';
import { Container } from '../Container/Container';
import styles from './TopNavigation.module.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';

function TopNavigation() {
  const ref = useRef();
  console.log(ref);
  function showElement(ref) {
    console.log(ref);
  }
  showElement();
  return (
    <Container>
      <div className={styles.navWrapper} ref={ref}>
        <BurgerMenu />
        <HeaderLogo />
        <nav className="visuallyHidden">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                Акции
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                О компании
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <HeaderContacts />
      </div>
    </Container>
  );
}

export default TopNavigation;
