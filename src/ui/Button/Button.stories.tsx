import { Meta, Story } from '@storybook/react';
import { Button, TButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: Story<TButton> = (args) => <Button {...args} />;

Default.args = {
  children: 'Button',
};
