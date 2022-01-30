import { Icon } from '../Icon';
import { getStyles } from '../../layout/layout';
import styles from './HeaderContacts.module.scss';
function HeaderContacts() {
  return (
    <div className="">
      <ul>
        <li className={`${styles.iconWhatsapp} ${styles.headerItem} `}>
          <a href="https://wa.me/384441231718">
            <Icon iconName="whatsapp" color={styles.whatsappColor} />
          </a>
        </li>
        <li className={`${styles.iconViber} ${styles.headerItem} `}>
          <a href="viber://chat?number=+384441231718">
            <Icon iconName="viber" color={styles.viberColor} />
          </a>
        </li>
        <li className={styles.headerItem}>
          <a href=" tel:+384441231718">8 (444) 123-17-18</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderContacts;
