import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ItemProps {
  href: string;
  className?: string;
}

const MenuItem = ({
  children,
  className = '',
  href,
}: PropsWithChildren<ItemProps>) => {
  const classNames = clsx(
    'block transition ease-in-out duration-300',
    className
  );

  return (
    <li>
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    </li>
  );
};

export default MenuItem;
