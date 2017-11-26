import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
class Provider extends Component {
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
 return (
 <div style={ style.provider }>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 </div>
 )
 }
}
export default Provider;
