import React, { Component } from 'react';
import style from './style';
class ProviderSearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			max_discharges: '',
			min_discharges: '',
			max_average_covered_charges: '',
			min_average_covered_charges: '',
			min_average_medicare_payments: '',
			max_average_medicare_payments: '',
			state: ''
		};
		this.handleMaxDischargesChange = this.handleMaxDischargesChange.bind(this);
		this.handleMinDischargesChange = this.handleMinDischargesChange.bind(this);
		this.handleMaxAverageConveredChargesChange = this.handleMaxAverageConveredChargesChange.bind(this);
		this.handleMinAverageConveredChargesChange = this.handleMinAverageConveredChargesChange.bind(this);
		this.handleMinAverageMedicarePaymentsChange = this.handleMinAverageMedicarePaymentsChange.bind(this);
		this.handleMaxAverageMedicarePaymentsChange = this.handleMaxAverageMedicarePaymentsChange.bind(this);
		this.handleStateChange = this.handleStateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleMaxDischargesChange(e) {
		this.setState({ max_discharges: e.target.value });
	}
	handleMinDischargesChange(e) {
		this.setState({ min_discharges: e.target.value });
	}
	handleMaxAverageConveredChargesChange(e) {
		this.setState({ max_average_covered_charges: e.target.value });
	}
	handleMinAverageConveredChargesChange(e) {
		this.setState({ min_average_covered_charges: e.target.value });
	}
	handleMinAverageMedicarePaymentsChange(e) {
		this.setState({ min_average_medicare_payments: e.target.value });
	}
	handleMaxAverageMedicarePaymentsChange(e) {
		this.setState({ max_average_medicare_payments: e.target.value });
	}
	handleStateChange(e) {
		this.setState({ state: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		let searchStr = `Searching provider with ${this.state.max_discharges}` +
			` ${this.state.min_discharges}` +
			` ${this.state.min_average_covered_charges}` +
			` ${this.state.max_average_covered_charges}` +
			` ${this.state.min_average_medicare_payments}` +
			` ${this.state.max_average_medicare_payments}` +
			` ${this.state.state}`;

		console.log(searchStr)
		let searchBy = {
			min_discharges: this.state.min_discharges,
			max_discharges: this.state.max_discharges,
			min_average_covered_charges: this.state.min_average_covered_charges,
			max_average_covered_charges: this.state.max_average_covered_charges,
			min_average_medicare_payments: this.state.min_average_medicare_payments,
			max_average_medicare_payments: this.state.max_average_medicare_payments,
			state: this.state.state
		}
		this.props.onSearch(searchBy);

	}
	render() {
		return(
			<form style={ style.providerSearchForm } onSubmit={ this.handleSubmit }>
       <input
       type='text'
       placeholder='Max Discharges'
       style={ style.providerSearchFormText}
       value={ this.state.maxDischarges }
       onChange={ this.handleMaxDischargesChange } />
       <input
       type='text'
       placeholder='Min Discharges'
       style={ style.providerSearchFormText}
       value={ this.state.minDischarges }
       onChange={ this.handleMinDischargesChange } />
       <input
       type='text'
       placeholder='Min Average Covered Charges'
       style={ style.providerSearchFormText}
       value={ this.state.minAverageCoveredCharges }
       onChange={ this.handleMinAverageConveredChargesChange } />
       <input
       type='text'
       placeholder='Min Average Covered Charges'
       style={ style.providerSearchFormText}
       value={ this.state.maxAverageCoveredCharges }
       onChange={ this.handleMaxAverageConveredChargesChange } />
       <input
       type='text'
       placeholder='Min Average Medicare Payments'
       style={ style.providerSearchFormText}
       value={ this.state.minAverageMedicarePayments }
       onChange={ this.handleMinAverageMedicarePaymentsChange } />
       <input
       type='text'
       placeholder='State'
       style={ style.providerSearchFormText}
       value={ this.state.state }
       onChange={ this.handleStateChange } />
       <input
       type='submit'
       style={ style.providerSearchFormPost }
       value='Post' />
      </form>
		)
	}
}
export default ProviderSearchForm;
