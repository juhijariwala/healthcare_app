
import React, { Component } from 'react';
import DATA from './data';
import style from './style';
class ProviderSearchForm extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
 <div style={ style.providerSearchForm }>
 <h2>Healthcare Provider Search:</h2>
 </div>
 )
 }
}
export default ProviderSearchForm;
