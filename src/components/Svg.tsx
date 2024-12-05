import Icons from './icons.svg';

type Props = {
  size?: number;
  className?: string;
  iconId: string;
};

export function Svg({ size, iconId, className }: Props) {
  console.log(Icons);
  return (
    <svg className={className} width={size} height={size}>
      <use href={`${Icons.src}#${iconId}`}></use>
    </svg>
  );
}
