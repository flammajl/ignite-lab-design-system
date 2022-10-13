import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TText = {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
};

export function Text({ size = 'md', children, asChild }: TText) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
      })}
    >
      {children}
    </Component>
  );
}
