import React from 'react';
import Select from '../src/Select';

export default {
	title: 'Forms/Select',
	component: Select,
	argTypes: {}
};

const param = {
	label: 'Cities',
	options: [{ name: 'New York', value: 'New York' }, { name: 'Boston', value: 'Boston' }]
};

const Template = args => <Select {...param} />;
export const Primary = Template.bind({});
