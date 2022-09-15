import Link from 'next/link';
import { PropsWithChildren } from 'react';

const CardLink = ({
  children,
  href,
  className,
}: PropsWithChildren<{ href: string; className?: string }>) => {
  const classNames = ['card__link', className].join(' ').trim();

  return (
    <Link href={href}>
      <a className={classNames}>{children}</a>
    </Link>
  );
};

export default CardLink;
