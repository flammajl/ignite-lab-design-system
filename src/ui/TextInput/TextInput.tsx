import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export type TTextInputRoot = {
  children: ReactNode;
};

function TextInputRoot({ children }: TTextInputRoot) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

export type TTextInputIcon = {
  children: ReactNode;
};

function TextInputIcon({ children }: TTextInputIcon) {
  return (
    <Slot className='w-6 h-6 text-gray-400 svg-input_focus'>{children}</Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

export type TTextInputInput = InputHTMLAttributes<HTMLInputElement> & {};

function TextInputInput({ ...rest }: TTextInputInput) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      )}
      {...rest}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
