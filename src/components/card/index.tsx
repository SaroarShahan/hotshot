import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardMeta from './CardMeta';
import CardLink from './CardLink';
import CardImage from './CardImage';

interface CardProps {
  className?: string;
}

const Card = ({ children, className = '' }: PropsWithChildren<CardProps>) => {
  const classNames = clsx('card', className);

  return <div className={classNames}>{children}</div>;
};

Card.Image = CardImage;
Card.Body = CardBody;
Card.Meta = CardMeta;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Link = CardLink;

export default Card;
