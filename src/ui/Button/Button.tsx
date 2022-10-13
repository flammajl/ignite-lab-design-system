import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  asChild?: boolean;
};

export function Button({ children, asChild, className, ...rest }: TButton) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
