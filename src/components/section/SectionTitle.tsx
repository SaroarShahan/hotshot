import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface SectionTitleProps {
  className?: string;
}

const SectionTitle = ({
  children,
  className = '',
}: PropsWithChildren<SectionTitleProps>) => {
  const classNames = clsx('font-bold text-3xl text-gray-900 mb-1', className);

  return <h2 className={classNames}>{children}</h2>;
};

export default SectionTitle;
