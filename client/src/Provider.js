import React, { Component } from 'react';
import style from './style';

class Provider extends Component {
	render() {
		return(
			<div style={ style.provider }>
        <div> Provider Name: {this.props.data['Provider Name']} </div>
        <div> Provider Street Address: {this.props.data['Provider Street Address']} </div>
        <div> Provider City: {this.props.data['Provider City']} </div>
        <div> Provider State: {this.props.data['Provider State']} </div>
        <div> Provider Zip Code: {this.props.data['Provider Zip Code']} </div>
        <div> Hospital Referral Region Description: {this.props.data['Hospital Referral Region Description']} </div>
        <div> Total Discharges: {this.props.data['Total Discharges']} </div>
        <div> Average Covered Charges: {this.props.data['Average Covered Charges']} </div>
        <div> Average Total Payments:  {this.props.data['Average Total Payments']} </div>
        <div> Average Medicare Payments: {this.props.data['Average Medicare Payments']} </div>
      </div>

		)
	}
}
export default Provider;
