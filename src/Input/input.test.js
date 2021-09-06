import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './index';

describe('<Input />', () => {
	test('renders label', () => {
		const component = shallow(<Input label="Name" />);
		expect(component.find('label').text()).toEqual('Name');
	});

	test('renders placeholder', () => {
		const component = shallow(<Input placeholder="Name" />);
		expect(component.find('input').prop('placeholder')).toEqual('Name');
	});
});
