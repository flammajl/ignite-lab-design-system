import { Meta, Story } from '@storybook/react';
import { Text, TText } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      type: 'string',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Default: Story<TText> = (args) => <Text {...args} />;
export const Custom: Story<TText> = (args) => <Text {...args} />;

Default.args = {
  children: 'Text',
  size: 'md',
};

Custom.args = {
  children: <p>P tag Text</p>,
  size: 'md',
  asChild: true,
};

Custom.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  asChild: {
    table: {
      disable: true,
    },
  },
};
