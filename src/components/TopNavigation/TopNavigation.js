import HeaderContacts from '../HeaderContacts/HeaderContacts';

function TopNavigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Акции</a>
          </li>
          <li>
            <a href="/">О компании</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
      <HeaderContacts />
    </div>
  );
}

export default TopNavigation;
