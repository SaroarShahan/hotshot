interface Props {
  src: string;
  alt?: string;
  className?: string;
}

const CardImage = ({ className = '', src, alt = '', ...restProps }: Props) => {
  const classNames = [className].join(' ').trim();

  return (
    <picture>
      <source srcSet={src} />
      <img className={classNames} src={src} alt={alt} {...restProps} />
    </picture>
  );
};

export default CardImage;
