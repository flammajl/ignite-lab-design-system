var c=Object.defineProperty;var e=(t,n)=>c(t,"name",{value:n,configurable:!0});import{$ as u,c as l}from"./clsx.m.768f3e61.js";import{j as r}from"./jsx-runtime.783962a1.js";import"./iframe.02d135e0.js";function o({children:t,asChild:n,className:a,...s}){return r(n?u:"button",{className:l("py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white",a),...s,children:t})}e(o,"Button");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/ui/Button/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/ui/Button/Button.tsx#Button"})}catch{}const _={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Button, TButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Default: Story<TButton> = (args) => <Button {...args} />;

Default.args = {
  children: 'Button',
};
`,locationsMap:{default:{startLoc:{col:39,line:9},endLoc:{col:69,line:9},startBody:{col:39,line:9},endBody:{col:69,line:9}}}}},title:"Components/Button",component:o},i=e(t=>r(o,{...t}),"Default");i.args={children:"Button"};const y=["Default"];export{i as Default,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Button.stories.abbc7f5b.js.map
