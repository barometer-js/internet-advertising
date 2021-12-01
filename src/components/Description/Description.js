import DescriptionItem from './DescriptionItem';

function Description() {
  return (
    <ul>
      <DescriptionItem
        title={'Заголовок #1'}
        description={'Небольшое описание в 2 строчки'}
      />
    </ul>
  );
}

export default Description;
