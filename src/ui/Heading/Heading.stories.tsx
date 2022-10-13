import { Meta, Story } from '@storybook/react';
import { Heading, THeading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
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

export const Default: Story<THeading> = (args) => <Heading {...args} />;
export const Custom: Story<THeading> = (args) => <Heading {...args} />;

Default.args = {
  children: 'Heading',
  size: 'md',
};

Custom.args = {
  children: <h1>H1 Heading</h1>,
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
