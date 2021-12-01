import s from './BottomNavigation.module.scss';

function BottomNavigation() {
  return (
    <div>
      <nav className={s.BottomNavigation}>
        <ul className={s.BottomNavigationList}>
          <li className={s.BottomNavigationItem}>
            <a className={s.BottomNavigationLink} href="/">
              Продвижение сайтов
            </a>
          </li>
          <li className={s.BottomNavigationItem}>
            <a className={s.BottomNavigationLink} href="/">
              Создание сайтов
            </a>
          </li>
          <li className={s.BottomNavigationItem}>
            <a className={s.BottomNavigationLink} href="/">
              Контекстная реклама
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;
