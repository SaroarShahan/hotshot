import { PropsWithChildren } from 'react';

const CardText = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => {
  const classNames = ['card__text', className].join(' ').trim();

  return <p className={classNames}>{children}</p>;
};

export default CardText;
