import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export type TButton = {
  children: ReactNode;
  asChild?: boolean;
};

export function Button({ children, asChild }: TButton) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white'
      )}
    >
      {children}
    </Component>
  );
}
