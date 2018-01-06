import React, { Component } from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Provider from '../src/Provider';
const provider = {
	'Provider Name': 'some name',
	'Provider Street Address': 'some Address',
	'Provider City': 'some city',
	'Provider State': 'some state',
	'Provider Zip Code': '12345',
	'Hospital Referral Region Description': 'Hospital ref',
	'Total Discharges': '12',
	'Average Covered Charges': '14',
	'Average Total Payments': '12',
	'Average Medicare Payments': '121'
}

describe('Provider Component', () => {
	const wrapper = shallow(<Provider data= {provider} />);
	it('renders Provider Name', () => {
		expect(wrapper.find('li').at(0).text()).toEqual(" Provider Name: some name ");
	});
});
