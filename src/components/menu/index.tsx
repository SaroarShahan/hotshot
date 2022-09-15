import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import MenuItem from './MenuItem';

interface MenuProps {
  className?: string;
}

const Menu = ({ children, className = '' }: PropsWithChildren<MenuProps>) => {
  const classNames = clsx('flex', className);

  return <ul className={classNames}>{children}</ul>;
};

Menu.Item = MenuItem;

export default Menu;
