import { Meta, Story } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox, TCheckbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<TCheckbox> = (args) => <Checkbox {...args} />;

Default.decorators = [
  (Story) => {
    return (
      <div className='flex items-center gap-2'>
        {Story()}
        <Text size='sm'>Lembrar de mim por 30 dias</Text>
      </div>
    );
  },
];
