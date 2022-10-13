var l=Object.defineProperty;var e=(t,r)=>l(t,"name",{value:r,configurable:!0});import{T as n}from"./Text.01a88a4e.js";import{j as o}from"./jsx-runtime.783962a1.js";import"./clsx.m.768f3e61.js";import"./iframe.02d135e0.js";const T={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:37,line:18},endLoc:{col:65,line:18},startBody:{col:37,line:18},endBody:{col:65,line:18}},custom:{startLoc:{col:36,line:19},endLoc:{col:64,line:19},startBody:{col:36,line:19},endBody:{col:64,line:19}}}}},title:"Components/Text",component:n,argTypes:{children:{type:"string"},size:{options:["sm","md","lg"],control:{type:"select"}}}},a=e(t=>o(n,{...t}),"Default"),s=e(t=>o(n,{...t}),"Custom");a.args={children:"Text",size:"md"};s.args={children:o("p",{children:"P tag Text"}),size:"md",asChild:!0};s.argTypes={children:{table:{disable:!0}},asChild:{table:{disable:!0}}};const x=["Default","Custom"];export{s as Custom,a as Default,x as __namedExportsOrder,T as default};
//# sourceMappingURL=Text.stories.7bdb1622.js.map
