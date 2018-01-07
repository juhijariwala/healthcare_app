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
	it('renders Provider Address', () => {
		expect(wrapper.find('li').at(1).text()).toEqual(" Provider Street Address: some Address ");
	});
	it('renders Provider City', () => {
		expect(wrapper.find('li').at(2).text()).toEqual(" Provider City: some city ");
	});
	it('renders Provider State', () => {
		expect(wrapper.find('li').at(3).text()).toEqual(" Provider State: some state ");
	});
	it('renders Provider Zip Code', () => {
		expect(wrapper.find('li').at(4).text()).toEqual(" Provider Zip Code: 12345 ");
	});
	it('renders Hospital Referral Region Description', () => {
		expect(wrapper.find('li').at(5).text()).toEqual(" Hospital Referral Region Description: Hospital ref ");
	});
	it('renders Total Discharges', () => {
		expect(wrapper.find('li').at(6).text()).toEqual(" Total Discharges: 12 ");
	});
	it('renders Average Covered Charges', () => {
		expect(wrapper.find('li').at(7).text()).toEqual(" Average Covered Charges: 14 ");
	});
	it('renders Average Total Payments', () => {
		expect(wrapper.find('li').at(8).text()).toEqual(" Average Total Payments: 12 ");
	});
	it('renders Average Medicare Payments', () => {
		expect(wrapper.find('li').at(9).text()).toEqual(" Average Medicare Payments: 121 ");
	});
});
