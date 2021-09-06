import React from 'react';
import Input from '../src/Input';



export default {
    title: 'Forms/Input',
    component: Input,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};


// const Template = (args) => <Input {...args} />;
const Template = (args) => <Input {...args} />;
export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
