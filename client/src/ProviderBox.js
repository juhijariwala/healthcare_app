import React, { Component } from 'react';
import ProviderSearchForm from './ProviderSearchForm';
import ProviderList from './ProviderList';
import axios from 'axios';
import style from './style';

class ProviderBox extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(searchBy) {
		axios.get(this.props.url, {
				params: searchBy
			})
			.then(res => {
				this.setState({ data: res.data });
			});
	}

	render() {
		return(
			<div style={ style.providerBox }>
       <h2>Healthcare Providers:</h2>
       <ProviderSearchForm onSearch= {this.handleSearch} />
       <ProviderList data={this.state.data}/>
      </div>
		)
	}
}
export default ProviderBox;
