import { PropsWithChildren } from 'react';

const CardTitle = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => {
  const classNames = ['card__title', className].join(' ').trim();

  return <h2 className={classNames}>{children}</h2>;
};

export default CardTitle;
