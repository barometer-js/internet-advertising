import { Icon } from '../Icon';
import { getStyles } from '../../layout/layout';
import s from './HeaderContacts.module.scss';
const styles = getStyles();
function HeaderContacts() {
  return (
    <div className={s.container}>
      <ul className={s.contactsList}>
        <li className={s.contactsItem}>
          <Icon iconName="whatsapp" color={styles.whatsappColor} />
        </li>
        <li className={s.contactsItem}>
          <Icon iconName="viber" color={styles.viberColor} />
        </li>
        <li className={s.contactsItem}>
          <a className={s.contactsLink} href="tel:84441231718">
            8 (444) 123-17-18
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderContacts;
