import { Meta, Story } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TTextInputInput, TTextInputRoot } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
} as Meta;

export const Default: Story<TTextInputRoot> = (args) => (
  <TextInput.Root {...args} />
);

export const WithoutIcon: Story<TTextInputRoot> = (args) => (
  <TextInput.Root {...args} />
);

Default.args = {
  children: [
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>,
    <TextInput.Input placeholder='Type your e-mail address' />,
  ],
};
Default.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};

WithoutIcon.args = {
  children: <TextInput.Input placeholder='Type your e-mail address' />,
};
WithoutIcon.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};
