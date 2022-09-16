import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface SectionSubTitleProps {
  className?: string;
}

const SectionSubTitle = ({
  children,
  className = '',
}: PropsWithChildren<SectionSubTitleProps>) => {
  const classNames = clsx('text-xl', className);

  return <p className={classNames}>{children}</p>;
};

export default SectionSubTitle;
