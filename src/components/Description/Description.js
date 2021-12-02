import DescriptionItem from './DescriptionItem';
import { DescriptionMarkup } from './DescriptionMarkup';
import s from './DescriptionItem.module.scss';

function Description() {
  return (
    <ul className={s.list}>
      {DescriptionMarkup.map(item => (
        <li key={item.title} className={s.item}>
          <DescriptionItem
            userImg={item.userImg}
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
}

export default Description;
