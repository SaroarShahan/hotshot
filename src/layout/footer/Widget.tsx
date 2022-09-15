import { PropsWithChildren } from 'react';

interface WidgetProps {
  title: string;
}

const Widget = ({ children, title }: PropsWithChildren<WidgetProps>) => {
  return (
    <div className="text-white">
      <h4 className="text-white mb-4 text-2xl font-semibold">{title}</h4>

      {children}
    </div>
  );
};

export default Widget;
