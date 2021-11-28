import { Icon } from '../Icon';
import { getStyles } from '../../layout/layout';
const styles = getStyles();
function HeaderContacts() {
  return (
    <div>
      <ul>
        <li>
          <Icon iconName="whatsapp" color={styles.whatsappColor} />
        </li>
        <li>
          <Icon iconName="viber" color={styles.viberColor} />
        </li>
      </ul>
    </div>
  );
}

export default HeaderContacts;
