var r=Object.defineProperty;var a=(e,s)=>r(e,"name",{value:s,configurable:!0});import{$ as l,c}from"./clsx.m.768f3e61.js";import{j as t}from"./jsx-runtime.783962a1.js";import"./iframe.02d135e0.js";function n({size:e="md",children:s,asChild:i,className:d}){return t(i?l:"h2",{className:c("text-gray-100 font-sans",{"text-lg":e==="sm","text-xl":e==="md","text-2xl":e==="lg"},d),children:s})}a(n,"Heading");try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/ui/Heading/Heading.tsx#Heading"]={docgenInfo:n.__docgenInfo,name:"Heading",path:"src/ui/Heading/Heading.tsx#Heading"})}catch{}const y={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:40,line:18},endLoc:{col:71,line:18},startBody:{col:40,line:18},endBody:{col:71,line:18}},custom:{startLoc:{col:39,line:19},endLoc:{col:70,line:19},startBody:{col:39,line:19},endBody:{col:70,line:19}}}}},title:"Components/Heading",component:n,argTypes:{children:{type:"string"},size:{options:["sm","md","lg"],control:{type:"select"}}}},g=a(e=>t(n,{...e}),"Default"),o=a(e=>t(n,{...e}),"Custom");g.args={children:"Heading",size:"md"};o.args={children:t("h1",{children:"H1 Heading"}),size:"md",asChild:!0};o.argTypes={children:{table:{disable:!0}},asChild:{table:{disable:!0}}};const h=["Default","Custom"];export{o as Custom,g as Default,h as __namedExportsOrder,y as default};
//# sourceMappingURL=Heading.stories.063b8216.js.map
