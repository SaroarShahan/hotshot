import { PropsWithChildren } from 'react';

const CardMeta = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const classNames = ['card__meta', className].join(' ').trim();

  return <div className={classNames}>{children}</div>;
};

export default CardMeta;
