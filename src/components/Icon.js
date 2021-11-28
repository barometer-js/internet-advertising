import svg from '../images/icons/sprite.svg';
export function Icon({ iconName, color, width, height, className, stroke }) {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      className={`icon icon-${iconName} ${className}`}
      stroke={stroke}
    >
      <use xlinkHref={`${svg}#${iconName}`}></use>
    </svg>
  );
}

Icon.defaultProps = {
  iconName: '',
  color: 'pink',
  width: '24px',
  height: '24px',
  stroke: 'inherit',
};
