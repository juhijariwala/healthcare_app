import React, { Component } from 'react';
import ProviderSearchForm from './ProviderSearchForm';
import ProviderList from './ProviderList';
import DATA from './data';
import style from './style';

class ProviderBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
 <div style={ style.providerBox }>
 <h2>Healthcare Providers:</h2>
 <ProviderSearchForm />
 <ProviderList data={DATA}/>
 </div>
 )
 }
}
export default ProviderBox;
