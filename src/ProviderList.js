import React, { Component } from 'react';
import Provider from './Provider';
import style from './style';

class ProviderList extends Component {
	render() {
		let providerNodes = this.props.data.map(provider => {
			return(
				<Provider name={ provider.providerName } data= {provider} key={ provider._id }>
        </Provider>
			)
		})
		return(
			<div style={ style.providerList }>
        { providerNodes }
      </div>
		)
	}
}
export default ProviderList;
