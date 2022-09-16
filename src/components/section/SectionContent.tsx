import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface SectionContentProps {
  className?: string;
}

const SectionContent = ({
  children,
  className = '',
}: PropsWithChildren<SectionContentProps>) => {
  const classNames = clsx('mt-8', className);

  return <div className={classNames}>{children}</div>;
};

export default SectionContent;
