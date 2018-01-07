//style.js
const style = {
	provider: {
		backgroundColor: '#fafafa',
		margin: '10px',
		padding: '3px 10px',
		fontSize: '.85rem'
	},
	providerList: {
		border: '1px solid #f1f1f1',
		padding: '0 12px',
		maxHeight: '70vh',
		overflow: 'scroll'
	},
	providerSearchForm: {
		margin: '10px',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-between'
	},
	providerSearchFormText: {
		flex: '4',
		minWidth: '200px',
		margin: '3px',
		padding: '0 10px',
		height: '40px',
		borderRadius: '3px'
	},
	providerSearchFormPost: {
		minWidth: '75px',
		flex: '1',
		height: '40px',
		margin: '5px 3px',
		fontSize: '1rem',
		backgroundColor: '#A3CDFD',
		borderRadius: '3px',
		color: '#fff',
		textTransform: 'uppercase',
		letterSpacing: '.055rem',
		border: 'none'
	},
	updateLink: {
		textDecoration: 'none',
		paddingRight: '15px',
		fontSize: '.7rem'
	},
	deleteLink: {
		textDecoration: 'none',
		paddingRight: '15px',
		fontSize: '.7rem',
		color: 'red'
	}
}
module.exports = style;
