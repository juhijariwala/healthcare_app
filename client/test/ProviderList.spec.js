import React, { Component } from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import ProviderList from '../src/ProviderList';
const providerList = [{}];

describe('Provider List Component', () => {
	const wrapper = mount(<ProviderList data= {providerList} />);
	it('renders Provider in List', () => {
		expect(wrapper.find('ul').length).toEqual(1);
		expect(wrapper.find('li').length).toEqual(10);
	});
});
