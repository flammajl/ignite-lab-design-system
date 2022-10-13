import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import { Check } from 'phosphor-react';

export type TCheckbox = {};

export function Checkbox({}: TCheckbox) {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
