import React, { Component } from 'react';
import style from './style';

class Provider extends Component {
	render() {
		return(
			<ul style={ style.provider }>
        <li> Provider Name: {this.props.data['Provider Name']} </li>
        <li> Provider Street Address: {this.props.data['Provider Street Address']} </li>
        <li> Provider City: {this.props.data['Provider City']} </li>
        <li> Provider State: {this.props.data['Provider State']} </li>
        <li> Provider Zip Code: {this.props.data['Provider Zip Code']} </li>
        <li> Hospital Referral Region Description: {this.props.data['Hospital Referral Region Description']} </li>
        <li> Total Discharges: {this.props.data['Total Discharges']} </li>
        <li> Average Covered Charges: {this.props.data['Average Covered Charges']} </li>
        <li> Average Total Payments: {this.props.data['Average Total Payments']} </li>
        <li> Average Medicare Payments: {this.props.data['Average Medicare Payments']} </li>
      </ul>
		)
	}
}
export default Provider;
