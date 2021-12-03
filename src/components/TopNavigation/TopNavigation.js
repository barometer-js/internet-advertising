import HeaderContacts from '../Contacts/HeaderContacts';
import s from './TopNavigation.module.scss';
import dataTopNav from './dataTopNav.json';

function TopNavigation() {
  return (
    <div className={s.section}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          {dataTopNav.map(data => (
            <li className={s.item} key={data.id}>
              <a href="/">{data.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <HeaderContacts />
    </div>
  );
}

export default TopNavigation;
