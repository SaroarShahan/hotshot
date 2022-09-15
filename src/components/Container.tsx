import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';

interface ContainerProps {
  className?: string;
}

const Container = ({
  className,
  children,
}: PropsWithChildren<ContainerProps>) => {
  return <div className={clsx('container', className ?? '')}>{children}</div>;
};

export default Container;
