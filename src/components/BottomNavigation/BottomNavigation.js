import s from './BottomNavigation.module.scss';

function BottomNavigation() {
  return (
    <div>
      <nav className={s.bottomNavigation}>
        <ul className={s.bottomNavigationList}>
          <li className={s.bottomNavigationItem}>
            <a className={s.bottomNavigationLink} href="/">
              Продвижение сайтов
            </a>
          </li>
          <li className={s.bottomNavigationItem}>
            <a className={s.bottomNavigationLink} href="/">
              Создание сайтов
            </a>
          </li>
          <li className={s.bottomNavigationItem}>
            <a className={s.bottomNavigationLink} href="/">
              Контекстная реклама
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;
