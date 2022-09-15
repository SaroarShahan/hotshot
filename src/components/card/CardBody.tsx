import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const CardBody = ({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) => {
  const classNames = clsx(className);

  return <div className={classNames}>{children}</div>;
};

export default CardBody;
