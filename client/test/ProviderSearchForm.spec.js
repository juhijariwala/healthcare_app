import React, { Component } from 'react';
import expect from 'expect';
import sinon from 'sinon';

import { shallow, mount } from 'enzyme';
import ProviderSearchForm from '../src/ProviderSearchForm';
const handledSearch = sinon.spy();
describe('Provider Search Form Component', () => {
	it('should call handledSearch on form submit', () => {
		const searchBy = {
			'min_discharges': '1',
			'max_discharges': '100',
			'min_average_covered_charges': '123',
			'max_average_covered_charges': '456',
			'min_average_medicare_payments': '789',
			'max_average_medicare_payments': '981',
			'state': 'state'
		}
		const handledSearch = sinon.spy();
		const wrapper = mount(<ProviderSearchForm onSearch= {handledSearch} />);

		const max_discharges_input_event = { target: { name: "pollName", value: "100" } };
		wrapper.find('input').at(0).simulate('change', max_discharges_input_event);

		const min_discharges_input = { target: { name: "pollName", value: "1" } };
		wrapper.find('input').at(1).simulate('change', min_discharges_input);

		const min_average_covered_charges_event = { target: { name: "pollName", value: "123" } };
		wrapper.find('input').at(2).simulate('change', min_average_covered_charges_event);

		const max_average_covered_charges_event = { target: { name: "pollName", value: "456" } };
		wrapper.find('input').at(3).simulate('change', max_average_covered_charges_event);

		const min_average_medicare_payments_event = { target: { name: "pollName", value: "789" } };
		wrapper.find('input').at(4).simulate('change', min_average_medicare_payments_event);

		const max_average_medicare_payments_event = { target: { name: "pollName", value: "981" } };
		wrapper.find('input').at(5).simulate('change', max_average_medicare_payments_event);

		const state_event = { target: { name: "pollName", value: "state" } };
		wrapper.find('input').at(6).simulate('change', state_event);

		wrapper.find('form').simulate('submit');
		expect(handledSearch.getCalls()[0].args).toEqual([searchBy]);
	});
});
