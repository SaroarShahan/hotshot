import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import SectionContent from './SectionContent';
import SectionSubTitle from './SectionSubTitle';
import SectionTitle from './SectionTitle';

interface SectionProps {
  className?: string;
}

const Section = ({
  children,
  className = '',
}: PropsWithChildren<SectionProps>) => {
  const classNames = clsx('py-10', className);

  return <div className={classNames}>{children}</div>;
};

Section.Title = SectionTitle;
Section.SubTitle = SectionSubTitle;
Section.Content = SectionContent;

export default Section;
